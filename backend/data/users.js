import bcrypt from 'bcryptjs'

const users = [
    {
        name : 'Admin User',
        email : 'admin@example.com',
        password : bcrypt.hashSync('123456,10'),
        isAdmin : true,

    },

   
    {
        name : 'Geo',
        email : 'geo@example.com',
        password : bcrypt.hashSync('123456,10'),
       
    },
    
    {
        name : 'Joe Don',
        email : 'joen@example.com',
        password : bcrypt.hashSync('123456,10'),
    },

    {
        name : 'jio pie',
        email : 'jio@example.com',
        password : bcrypt.hashSync('123456,10'),
        

    },
    
    
]
export default users