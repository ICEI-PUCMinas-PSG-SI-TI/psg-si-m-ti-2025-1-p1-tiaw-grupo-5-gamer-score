export async function apiGet(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados de ${url}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function login(username, password) {
    try {
        const userCredentials = await apiGet("http://localhost:3001/users");
        const findUser = userCredentials.find(user => user.username === username);
        if (findUser) {
            if (findUser.password === password) {
                return true;
            } else {
                return false;
            }
        } else {
            return "Usuário não encontrado.";
        }
    } catch (error) {
        return `Erro ao buscar usuários: ${error.message}`;
    }
}
