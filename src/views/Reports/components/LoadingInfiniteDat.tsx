import React, { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';

const fetchProjects = async ({ pageParam = 1 }) => {
  debugger;
  const res = await axios.get(`http://localhost:3000/data?_limit=10&_page=${pageParam}`);

  if (res.status == 200) return res?.data;

  return {};
};

const useData = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery('projects', fetchProjects, {
    getNextPageParam: (lastPage, pages) => {
      if (pages.length === 130) return false;

      return pages.length + 1;
    },
    refetchOnMount: false,
    // keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: true,
    keepPreviousData: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (hasNextPage && !isFetchingNextPage) {
        void fetchNextPage();
      }
    }, 500); // Fetch next page every second

    return () => clearInterval(interval);
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error fetching data</div>;
  }

  return { status, isFetchingNextPage, data };
};

export default useData;
