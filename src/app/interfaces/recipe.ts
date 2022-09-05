export interface Recipe {
    name: string;
    description: string;
    thumbnail_url: string;
    thumbnail_alt_text: string;
}
export interface RecipeResponse {
    count: number;
    results: Recipe[]
}