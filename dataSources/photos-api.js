const  { RESTDataSource } = require("@apollo/datasource-rest") 


class PhotosApi extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = "https://gold-angry-earthworm.cyclic.app"
    }
    getCategories(){
        return this.get("data")
    }
    getCategory(name){
        return this.get(name)
    }
    getPhotoObj(id) {
        return this.get(`data/${id}`)
    }
}

module.exports = PhotosApi