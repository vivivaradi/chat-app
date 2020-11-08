
const Bob = {
    userid: 2,
    name: "Bob",
    friends: []
};

const Alice = {
    userid: 1,
    name: "Alice",
    friends: [Bob]
};

const Chat = {
    chatid: 1,
    participants: [ Alice, Bob ],
    messages: [{
        messageid: 1,
        sender: Alice,
        content: "Hello!",
        time: "2020.11.04.19:00"
    },
    {
        messageid: 2,
        sender: Bob,
        content: "Hi!",
        time: "2020.11.04.19:02"
    }]
};

    function getChat(){
        return Chat
    };

    function addMessage(chatid, sender, message){
        Chat.messages.push({
            messageid: "3",
            sender: sender,
            content: message
        })
        console.log(`Message added: ${message}`)
    };

    function getUserInfo(id){
        if (id === 1)
            return Alice
        else 
            return Bob
    };

    function getCurrentUser(){
        return Alice
    };

    function getFriends() {
        return Alice.friends
    };

    function getParticipants(currentUser){
        return Chat.participants.filter(function(value, index, arr){ return value.userid != currentUser.userid })
    }

export {getChat, getUserInfo, getCurrentUser, getFriends, addMessage, getParticipants};
    
