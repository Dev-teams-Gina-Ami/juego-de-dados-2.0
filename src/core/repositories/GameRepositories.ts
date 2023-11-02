import Game from "../domain/entities/Game"

export interface GameRepository {
    add(game: Game): Promise<void>;
    findById(id: number): Promise<any | null>;
    findAll(): Promise<any | null>;
    update(game: Game): Promise<void>;
    delete(id: number): Promise<void>;
}