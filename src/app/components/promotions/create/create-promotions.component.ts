import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PromotionsService} from 'src/app/shared/services/firebase/promotions.service';
import {ItemsService} from '../../../shared/services/firebase/items.service';
import {ImportService} from '../../../shared/services/firebase/import.service';
import {LogsService} from '../../../shared/services/firebase/logs.service';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import * as firebase from 'firebase';
@Component({
    selector: 'app-create-promotions',
    templateUrl: './create-promotions.component.html',
    styleUrls: ['./create-promotions.component.scss'],
})
export class CreatePromotionsComponent implements OnInit {
    @ViewChild('promotionType', {static: false}) promotionSelected: ElementRef;
    itemsCodes: [];
    selectedItems: any = [];
    discountForm: FormGroup;

    constructor(
        private promotionsService: PromotionsService,
        private toastrService: ToastrService,
        public itemsService: ItemsService,
        public logsService: LogsService,
        public importService: ImportService, private fb: FormBuilder,
    ) {
        this.itemsService.getMetaItems().subscribe(items => {
            this.itemsCodes = items.data().itemsCodes;
        });
        this.discountForm = fb.group({
            nameArFull: ['', Validators.required],
            code: ['', Validators.required],
            disCountType: [''],
            disCountValue: [''],
            validFrom: ['', Validators.required],
            validTo: ['', Validators.required],
            status: ['', Validators.required],
            notes: [''],
        });
    }

    ngOnInit() {
    }

    // ToDO not finished yet
    addPromotion() {
        let promotionData = this.discountForm.value;
        promotionData.promotionType = this.promotionSelected.nativeElement.value;
        this.importService.promotionStructure.forEach(promotion => {
            if (!promotionData.hasOwnProperty(promotion.field)) {
                promotionData[promotion.field] = '';
            }
        });
        // خصم عام
        if (this.promotionSelected.nativeElement.value == 'خصم عام') {
            promotionData.isTotalDiscount = 'نعم';
            promotionData.hasFreeItem = 'لا';

            if (promotionData.disCountType == '%') {
                promotionData.disCountPercentage = promotionData.disCountValue;
            } else if (promotionData.disCountType == 'مبلغ') {
                promotionData.disCountAmount = promotionData.disCountValue;
            }
            delete promotionData.disCountValue;
            // خصم المادة
        } else {
            promotionData.materialDiscountType = promotionData.disCountType;
            promotionData.materialDiscountValue = promotionData.disCountValue;
            promotionData.isTotalDiscount = 'لا';
            promotionData.hasFreeItem = 'لا';
            if (promotionData.materialDiscountType == '%') {
                promotionData.materialDiscountPercentage = promotionData.materialDiscountValue;
            } else if (promotionData.materialDiscountType == 'مبلغ') {
                promotionData.materialDiscountAmount = promotionData.materialDiscountValue;
            }
            delete promotionData.materialDiscountValue;
            delete promotionData.disCountValue;
            promotionData.disCountType = '';
            promotionData.disCountValue = '';
            promotionData.materialDiscountCombinationBarCodeId = this.selectedItems.materialDiscountCombinationBarCodeId;
            promotionData.materialDiscountCombinationCode = this.selectedItems.materialDiscountCombinationCode;
            promotionData.materialDiscountCombinationNameAr = this.selectedItems.materialDiscountCombinationNameAr;
        }
        promotionData.status = promotionData.status ? 'غير فعال' : 'فعال';
        if (this.discountForm.valid) {
            this.promotionsService.getPromotion(promotionData.code).subscribe(promo => {
                if (!promo.exists) {
                    this.promotionsService.createPromotion(promotionData.code, promotionData).then(res => {
                        this.discountForm.reset();
                        if (promotionData.materialDiscountCombinationCode) {
                            this.itemsService.getItem(promotionData.materialDiscountCombinationCode).subscribe(combination => {
                                if (combination.exists) {
                                    this.itemsService.updateItem(combination.id, {
                                        hasPromotion: true,
                                        promotionCode: firebase.firestore.FieldValue.arrayUnion(promotionData.code)
                                    });
                                }
                            });

                        }
                        const logData = `Created new promotion [${promotionData.code}]`;
                        this.logsService.createLog(logData);
                    });
                } else {
                    this.toastrService.error('promotionData Code is already exists');
                }
            });

        } else {
            console.log(this.discountForm);
            this.toastrService.error('All fields are required');
        }
    }

    selectItem(event) {
        this.itemsService.getItem(event.selectedItem).subscribe(item => {
            this.selectedItems.materialDiscountCombinationBarCodeId = item.data().barCodeId[0];
            this.selectedItems.materialDiscountCombinationCode = item.data().code;
            this.selectedItems.materialDiscountCombinationNameAr = item.data().nameArFull;

        });
    }
}
