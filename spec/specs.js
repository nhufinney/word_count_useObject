describe('wordCount', function(){

    // it("it counts one word, no duplicate", function(){
    //     expect(wordCount("aa")).to.eql({aa: 1});
    // });
    //
    // it("it counts two words, no duplicate", function(){
    //     expect(wordCount("hello world")).to.eql({hello: 1, world: 1});
    // });
    //
    // it("it count four words, no duplicate", function(){
    //     expect(wordCount("hello world my love")).to.eql({hello: 1, world: 1, my:1, love: 1});
    // });
    //
    // it("it count five words, some duplicates", function(){
    //     expect(wordCount("world world my world my")).to.eql({world: 3, my: 2});
    // });

    it("it count five words, some duplicates", function(){
        expect(wordCount("oh oh oh world on world my oh world my")).to.eql({oh :4, world: 3, on:1, my:2});
    });

    it("it count five words, some duplicates", function(){
        expect(wordCount("with to this to to my to with")).to.eql({with: 2, to:4, this: 1, my:1});
    });


});
