import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"user"
    },
    orderItems: [
        {
            name : { type:String, required: true},
            qty : { type:Number, required: true},

            image : { type:String, required: true},

            price : { type:Number, required: true},

            product : { 
                type: mongoose.Schema.Types.ObjectId,
                req:true,
                ref:'product'
            }

        }
    ],
    shippingAddress: {
        address: {type:String, required:true},
        city: {type:String, required:true},
        postalcode:{type:Number, required:true},
        country: {type:String, required:true},
    },

    paymentMethod: { type:String, required:true },
        
        paymentResult: {
        id : {type:String},
        status : {type:String},
        update_time:{type:String},
        email_address:{type:String}
    },

    taxPrice: {
            type:Number, 
            required:true,
             default: 0.0
    },
    shippingPrice: {
            type:Number,
             required:true, 
             default: 0.0
    },

    totalPrice: {
            type:Number,
             required:true, 
             default: 0.0
    },

    isPaid:{
        type:Boolean,
        requird:true,
        default:false
    },

paidAt: {
    type: Date
},

isDeliverd:  {
    type:Boolean,
    requird:true,
    default:false
},
deliveredAt: {
    type:Date
},
},
{
    timestamps: true,
}

)
 

const order = mongoose.model('Order',orderSchema);

export default order