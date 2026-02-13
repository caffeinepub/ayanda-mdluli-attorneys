import { useActor } from './useActor';

// Placeholder for future React Query hooks
// This file will be populated with backend query hooks in later phases

export function useQueries() {
    const { actor, isFetching } = useActor();
    
    return {
        actor,
        isFetching
    };
}
