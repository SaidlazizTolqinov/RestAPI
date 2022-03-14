const express = require("express")
const router = express.Router()
const cinema = require("../model/movies")

// get call

router.get("/api/movies" , (req, res)=>{
    cinema.find({} ,(err, data)=>{
        if(err) throw err
        if(data == ""){
            res.send("malumot yoq")
        } else {
            res.json(data)
        }
    })
})

// create movies

router.post("/api/movies" , (req, res)=>{
    const db = new cinema(req.body)
    const promise = db.save()
    promise.then(err=>{
        console.log(err);
    })
    promise.then(data=>{
        res.json(data)
    })
})

//  find id

router.get("/api/movies/:movie_id" , (req, res)=>{
    cinema.findById(req.params.movie_id , (err , data)=>{
        if (err) {
            console.log('id da xatolik bor');
        }
        else { 
            res.json(data)
        }
    })
})

// update

router.put("/api/movies/:movie_id" , (req, res)=>{
    cinema.findByIdAndUpdate(req.params.movie_id , req.body , (err , data)=>{
        if(err) throw err
        res.json(data)
    })
})

// delete movie

router.delete("/api/movies/:movie_id" , (req, res)=>{
    cinema.findByIdAndDelete(req.params.movie_id , (err , data)=>{
        if(err) {
            console.log("xatolik bor");
        }
        else {
            res.json(data)
        }
    })
})

// top 10

router.get("/api/movies/top10/cinema" , (req, res)=>{
    const promise = cinema.find({}).sort({imdb_score:  -1}).limit(3)

    promise.then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log(err);
    })
})


router.get("/api/movies/between/:start_year/:end_year" , (req, res)=>{
    const {start_year , end_year} = req.params;
    const promise=cinema.find({year: {"$gte": (start_year) , "$lte" : (end_year)}})
    promise.then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log("ishlamadi");
    })
})



module.exports = router