import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat/chat.component';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
  declarations: [ChatComponent],
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
