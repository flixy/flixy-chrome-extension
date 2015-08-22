// Generates an RFC 4122 v4 compliant UUID
// Sourced from http://derpturkey.com/generating-a-uuid-in-javascript/
function generateNewClientId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {  
        var nums = new Uint32Array(1), r, v;
        nums = crypto.getRandomValues(nums);
        r = nums[0] % 16,
        v = (c === 'x') ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function useClientId(clientId) {
    
}

chrome.storage.sync.get('clientId', function(items) {
    var clientId = items.clientId;
    if (clientId) {
        useClientId(clientId);
    } else {
        clientId = generateNewClientId();
        chrome.storage.sync.set({clientId: clientId}, function() {
            useClientId(clientId);
        });
    }
});