const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

var deleteDuplicates = function(head) {
    let current = head
    while(current.next){
    	if(current.data === current.next.data){
        	let next = current.next.next
            current.next = next
        }
        else{
        	current = current.next
        }
    }
    return head
};
