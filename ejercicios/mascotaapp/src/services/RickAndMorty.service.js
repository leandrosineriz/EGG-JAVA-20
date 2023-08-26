import { API_RM } from "../constants/Api.constants";

class RickAndMortyService {
    async getAllCharacters() {
        const response = await fetch(API_RM.CHARACTERS());
        //Interceptor
        return response.json();
    }

    async getCharacterById(id) {
        const response = await fetch(API_RM.CHARACTER_BY_ID(id));
        //Interceptor
        return response.json();
    }

    async getCharactersByUrl(url) {
        const response = await fetch(url);
        //Interceptor
        return response.json();
    }
    
    async getCharactersByPage(page) {
        const response = await fetch(API_RM.CHARACTERS_BY_PAGE(page));
        //Interceptor
        return response.json();
    }
}

export default new RickAndMortyService();