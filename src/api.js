
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

export async function apiPost(url, body) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(`Erro ao postar dados em ${url}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function apiPatch(url, body) {
    try {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(`Erro ao atualizar dados em ${url}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function apiDelete(url) {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Erro ao deletar dados de ${url}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
}
