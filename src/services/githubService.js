import { fallbackProfile, fallbackRepos } from '../data/githubFallback';

const GITHUB_USERNAME = 'LEKKALA-BHASKAR';
const GITHUB_API_BASE = 'https://api.github.com';

export const fetchGitHubProfile = async () => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`);
    if (!response.ok) throw new Error('Failed to fetch profile');
    return await response.json();
  } catch (error) {
    console.log('Using fallback GitHub profile data');
    return fallbackProfile;
  }
};

export const fetchGitHubRepos = async () => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
    );
    if (!response.ok) throw new Error('Failed to fetch repositories');
    return await response.json();
  } catch (error) {
    console.log('Using fallback GitHub repos data');
    return fallbackRepos;
  }
};

export const getLanguageStats = (repos) => {
  const languageCount = {};
  repos.forEach((repo) => {
    if (repo.language) {
      languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
    }
  });
  
  return Object.entries(languageCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([language, count]) => ({ language, count }));
};

export const getRecentRepos = (repos, limit = 6) => {
  return repos
    .filter(repo => !repo.fork)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, limit);
};
