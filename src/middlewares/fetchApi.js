import store from '../store/store';
export const fetchApi = (store) => (next) => (action)=>{
    if(action.type === "FETCH_CATEGORIES"){
        let categories = store.getState().categories;
        if(categories.length === 0){
            fetch("https://public-api.wordpress.com/rest/v1.1/sites/endzibackend.wordpress.com/posts/?category=kategorije&number=100").then((response)=>{
                return response.json()
            }).then((parsedData)=>{
                action.type = "ADD_CATEGORIES";
                action.payload = parsedData.posts
                next(action);
            }).catch((e)=>{
                console.log(e);
            });
        } 
    } else {
        return;
    }

}

export const filterCategories = (store) => (next) => (action)=>{

    if(action.type === "ADD_CATEGORIES"){
        let newData = [];
        action.payload.map((product)=>{
            let temp = {title: "", featured_image: "", hover: ""};
            temp.title = product.title;
            temp.featured_image = product.featured_image;
            var hover = product.featured_image.substr(0, product.featured_image.length-4);
            temp.hover = `${hover}-3.jpg`;
            temp.products = [];
            newData.push(temp);
        })
        action.payload = newData;
        next(action);
    }
}


