const resolvers = {
    Query: {
        //Return an array of caterogies
        categories: ( _, __, {dataSources}  ) => {
            return dataSources.photosApi.getCategories()
        },
        // Return specific category
        category: (_, {name}, {dataSources}) => {
            return dataSources.photosApi.getCategory(name)
        },
        // Return specific photo object
        photoObj: (_, {id}, {dataSources}) => {
            return dataSources.photosApi.getPhotoObj(id)
        }
    }
}


module.exports = resolvers