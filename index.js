console.log("Fernando")


self.addEventListener('push', function(event) {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
      return;
    }
  
    var data = {};
    if (event.data) {
      data = event.data.json();
    }
    var duracion = data.duration || "Something Has Happened";
    var message = data.answered_by || "Here's something you might want to check out.";
  
    console.log(duracion)

})