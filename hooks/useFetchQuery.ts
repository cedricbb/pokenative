import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const endpoint = "https://pokeapi.co/api/v2"

type API = {
    '/pokemon?limit=21': {
        count: number,
        next: string | null,
        results: {
            name: string,
            url: string,
        }[]
    }
}

export function useFetchQuery<T extends keyof API>(path: T) {
    return useQuery({
        queryKey: [path],
        queryFn: async () => {
            const response = await fetch(endpoint + path)
            return await response.json() as Promise<API[T]>
        },
    })
}

export function useInfiniteFetchQuery<T extends keyof API>(path: T) {
    return useInfiniteQuery({
        queryKey: [path],
        initialPageParam: endpoint + path,
        queryFn: async ({ pageParam}) => {
            const response = await fetch(pageParam)
            return await response.json() as Promise<API[T]>
        },
        getNextPageParam: (lastPage) => {
            if ("next" in lastPage) {
                return lastPage.next
            }
            return null   
        }
    })
}