//==========================================================
//==================== SOCKET SHIT =========================
//==========================================================

// Global Method to load socket stuff
Hooks.once("socketlib.ready", () => {
	socket = socketlib.registerModule("dice-stats");

    socket.register("push_sock", pushPlayerBlindRolls_sock);
    socket.register("clear_sock", clearRollData_sock);
});

//Socket fn call. This funtion is triggered by the gm to tell all users that they can 
//  inclide the blind roll data to the charts
function pushPlayerBlindRolls_sock(userid) {
	DS_GLOBALS.DS_OBJ_GLOBAL.pushBlindRolls();
    
    DICE_STATS_UTILS.refreshForms();
}

// socket that the gm can call on all players to clear all of their values
function clearRollData_sock() {
    DS_GLOBALS.DS_OBJ_GLOBAL.clearAllRollData();
    
    DICE_STATS_UTILS.refreshForms();   
}