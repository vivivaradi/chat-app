import Message from './message'

const Bob = {
    userid: "2",
    name: "Bob",
    friends: []
};

const Alice = {
    userid: "1",
    name: "Alice",
    friends: [Bob]
};

const Chat = {
    chatid: "1",
    participants: [ Alice, Bob ],
    messages: [{
        messageid: "1",
        sender: "Alice",
        content: "Hello!"
    },
    {
        messageid: "2",
        sender: "Bob",
        content: "Hi!"
    }]
};

class Data {

    getMessages(){
        return Chat
    };

    addMessage(chatid, sender, message){
        Chat.messages.push({
            messageid: "3",
            sender: sender,
            content: message
        })
    };

    getUserInfo(id){
        if (id === 1)
            return Alice
        else 
            return Bob
    };

    getCurrentUser(){
        return Alice
    };

    getFriends() {
        return Alice.friends
    };
}

export default Data

    
