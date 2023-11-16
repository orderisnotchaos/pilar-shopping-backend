
const db = require('../database/models');
module.exports = {
    default: (req,res) =>{
        const businesses =[
            {image:'lo-de-leo-pilar.jpg',
             name:'Lo de Leo',
             link:'https://web.facebook.com/parrillalodeleo?_rdc=1&_rdr'},
            {image:'los-belatti-restaurant.jpg',
             name:'Los Belatti',
             link:'https://www.tripadvisor.com/Restaurant_Review-g312754-d9977072-Reviews-Los_Belatti-Pilar_Province_of_Buenos_Aires_Central_Argentina.html'},
            {image: 'los-portus-pilar.jpg',
              name:'Los Portus Pilar',
              link:'https://los-portus-comida-rapida-venezolana-arepas.negocio.site/?utm_source=gmb&utm_medium=referral'},
          ];
        return res.json(businesses);
    },
    messageHandler: async (req,res) =>{
        console.log(req.body);
        if(!req.body) return res.status(400);
        if(!req.body[0]) return res.status(400);
        if(!req.body[1]) return res.status(400);
        if(!req.body[2]) return res.status(400);
        if(req.body[3]) return res.status(400);
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;
        if(emailRegex.test(req.body[1]) !== true && 
                           phoneRegex.test(req.body[1]) !== true ){
                           
            return res.status(400).json({ok:false});

        }
        const message = await db.Message.create({name:req.body[0],mailtelephone:req.body[1],message:req.body[2]})

        if(message) return res.status(200).json({ok:true});
        else return res.status(500);

    }
}