export interface Recipe {
    name: string;
    description: string;
    thumbnail_url: string;
    thumbnail_alt_text: string;
    id: number;
}
export interface RecipeResponse {
    count: number;
    results: Recipe[]
}
export interface RecipeItem {
    count: number;
    recipe: Recipe
}