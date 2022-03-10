export default {
    clearForm() {
        this.event.name = ''
        this.event.date = ''
        this.event.description = ''
        this.event.picture = ''
        this.event.type = ''
        this.event.phone_number = ''
        this.event.email = ''
        this.event.place = ''

        this.submited = 0;
      },
      imageExists(image_url) {
        var http = new XMLHttpRequest();
    
        http.open('HEAD', image_url, false);
        http.send();
    
        return http.status != 404;
    }
}