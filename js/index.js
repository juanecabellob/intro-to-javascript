function getMyProfession() {
    let professionElement = document.getElementById('profession');
    let profession = professionElement.options[professionElement.selectedIndex].text;
    alert(profession);
} 

function handlePressEvent(e) {
    let message = `You press ${e.key}`;
    if (e.shiftKey) {
        message += ` and the shift key`
    }
    if (e.altKey) {
        message += ` and the alt key`
    }
    if (e.ctrlKey) {
        message += ` and the ctrl key`
    }
    if (e.metaKey) {
        message += ` and the cmd or meta key`
    }
    alert(message);
}
let likeButton = document.getElementById('like-button');
likeButton.addEventListener("click", getMyProfession);
document.addEventListener("keypress", handlePressEvent);