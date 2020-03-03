'use strict';
const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();
exports.incrementItemRequestedQty = functions.firestore.document('/carts/{documentId}')
    .onUpdate((snap, context) => {
        const original = snap.after.data();
        if (!original.isActive) {
            Object.keys(original.items).map(itemCode => {
                return admin.firestore().doc('combinations/' + itemCode)
                    .set({requestedQty: admin.firestore.FieldValue.increment(original.items[itemCode])}, {merge: true})
            })
        }
    });
