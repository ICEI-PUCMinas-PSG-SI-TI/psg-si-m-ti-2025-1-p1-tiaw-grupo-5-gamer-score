export function createUserModel(
    userId, 
    username, 
    password, 
    image,
    favorite_genres,
    favorite_games,
    processor,
    ram,
    graphic_cards,
    storage,
    system
) {
    const newUser = {
        "id": userId,
        "username": username,
        "password": password,
        "image": image,
        "favorite_genres":favorite_genres,
        "favorite_games":favorite_games,
        "spec": {
            "processor": processor,
            "ram": ram,
            "graphic_cards": graphic_cards,
            "storage": storage,
            "operating_system":system
        }
    }

    return newUser;
}

export function createNewGameRegisterModel(
    name,
    image,
    genre,
    score,
    graphic_cards,
    id
) {
    const newGame = {
        "name": name,
        "image": image,
        "genre": genre,
        "avarage_score": score,
        "graphic_cards": graphic_cards,
        "comments": [],
        "id": id
    }

    return newGame;
}

export function createNewCommentModel(
    id,
    game_id,
    game_name,
    platform,
    name,
    role,
    score,
    time,
    comment,
    comment_id
) {
    const newComment = {
        "id": id,
        "game_id": game_id,
        "game_name": game_name,
        "platform" : platform,
        "user": name,
        "role": role,
        "score": score,
        "date": time,
        "comment": comment,
        "comment_id": comment_id
    }

    return newComment
}