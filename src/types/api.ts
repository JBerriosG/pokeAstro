export interface APIPokemonsResponse {
    count:    number;
    next:     string;
    previous: string;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}

export interface APIPokemonResponse {
    abilities:                Ability[];
    base_experience:          number;
    height:                   number;
    held_items:               any[];
    id:                       number;
    is_default:               boolean;
    location_area_encounters: string;
    moves:                    Move[];
    name:                     string;
    order:                    number;
    stats:                    Stat[];
    types:                    Type[];
    weight:                   number;
    sprites:                  Sprites;
}

export interface Ability {
    ability:   Species;
    is_hidden: boolean;
    slot:      number;
}

export interface Move {
    move:                  Species;
    version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at:  number;
    move_learn_method: Species;
    version_group:     Species;
}

export interface Stat {
    base_stat: number;
    effort:    number;
    stat:      Species;
}

export interface Type {
    slot: number;
    type: Species;
}

export interface Species {
    name: string;
    url:  string;
}

export interface Sprites {
    back_default:       string;
    back_shiny:         string;
    front_default:      string;
    front_shiny:        string;
    animated?:          Sprites;
}