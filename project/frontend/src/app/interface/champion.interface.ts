// champion.interface.ts

export interface Champion {
    name: string;
    title: string;
    tags: string[];
    icon: string;
    description: string;
    skins: Skin[];
}

export interface Skin {
    [name: string]: string; // Le nom de la skin est la clé, l'URL de l'image est la valeur
}
