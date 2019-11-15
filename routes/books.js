var express=require('express');
var router=express.Router();
//your data
var books=[
    {
        id:1,
        title:"JS Fundamentals",
        author:"John"
    },
    {
        id:2,
        title:"React Beginner",
        author:"Ram"
    },
    {
        id:3,
        title:"Node in action",
        author:"John"
    }
]

//

router.route("/")
    .get((req,res)=>{
        res.send(books);
    })
    .post((req,res)=>{
        var newBook=req.body;
        console.log(newBook);
        books.push(newBook);
        res.send(books);
    })

router.get("/search/:keyword",(req,res)=>{
    var keyword=req.params.keyword;
    var latestBooks=books.filter((book)=>{
        return book.title.includes(keyword);
    })

    res.send(latestBooks);
})

router.route("/:id")
    .get((req,res)=>{
        var id=req.params.id;
        var currentBook=books.find((book)=>{
            return book.id==id;
        })

        res.send(currentBook);
    })
    .delete((req,res)=>{
        var id=req.params.id;
        var latestBooks=books.filter((book)=>{
            return book.id!=id;
        })
        res.send(latestBooks)
    })
    .put((req,res)=>{
        var id=req.params.id;

        var currentBook=books.find((book)=>{
            return book.id==id;
        })

        currentBook.author=req.body.author;
        //currentBook.id=req.body.newId;

        var latestBooks=books.filter((book)=>{
            return book.id!=id;
        })

        latestBooks.push(currentBook);
        res.send(latestBooks)
    })

module.exports=router;