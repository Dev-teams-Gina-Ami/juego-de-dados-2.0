import Game from "../domain/entities/Game"

export interface GameRepository {
    add(game: Game): Promise<void>;
    findById(id: number): Promise<Game | null>;
    findAll(): Promise<Game[] | null>;
    update(game: Game): Promise<void>;
    delete(id: number): Promise<void>;
}