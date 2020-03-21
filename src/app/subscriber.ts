export class Subscriber {

    constructor(
        public name: string,
        public email: string,
        public phoneNumber: number,
        public currentlySearching: string,
        public message: string,

    ){
        let mySubscriber = new Subscriber(
            "lol", "lol@lol.com", 12345, "Yes", "This is my Message"
        );
        console.log("My new subscriber is: " + mySubscriber.name)

    }



}
