const express = require("express");
const router = express.Router();
const friends = require('../models/friends')


router.get('/filter', (req, res) => {
    console.log(req.query);
    let filterGender = req.query.gender;
    let filterLetter = req.query.letter; 
    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);
    }

    if (filterLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.charAt(0).toUpperCase() == filterLetter.toUpperCase());
    }

    if (matchingFriends.length > 0) {
        res.status(200).json(matchingFriends);
    } else {
        res.status(404).json({ error: "No friends matching criteria" });
    }
});


router.get('/info', (req, res) => {
    const { 'user-agent': userAgent, 'content-type': contentType, accept } = req.headers;
    res.json({ userAgent, contentType, accept });
});


router.get('/:id', (req, res) => {
    console.log(req.params);
    let friendId = req.params.id;


    let matchedFriend = friends.find(friend => friend.id == friendId);

    if (matchedFriend) {
        res.json(matchedFriend);
    } else {
        res.status(404).json({ error: 'Friend not found' });
    }
});


router.put('/:id', (req, res) => {
    let friendId = req.params.id;
    let updatedFriend = req.body;

    
    let friendIndex = friends.findIndex(friend => friend.id == friendId);

    if (friendIndex !== -1) {
        
        friends[friendIndex] = { ...friends[friendIndex], ...updatedFriend };
        res.json({ result: 'Updated friend with ID ' + friendId, data: friends[friendIndex] });
    } else {
        res.status(404).json({ error: 'Friend not found' });
    }
});

module.exports = router;
