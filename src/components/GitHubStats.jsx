import { useState, useEffect } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaBook, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fetchGitHubProfile, fetchGitHubRepos, getLanguageStats, getRecentRepos } from '../services/githubService';

function GitHubStats() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [languageStats, setLanguageStats] = useState([]);
  const [recentRepos, setRecentRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGitHubData = async () => {
      setLoading(true);
      const [profileData, reposData] = await Promise.all([
        fetchGitHubProfile(),
        fetchGitHubRepos()
      ]);
      
      if (profileData) setProfile(profileData);
      if (reposData && reposData.length > 0) {
        setRepos(reposData);
        setLanguageStats(getLanguageStats(reposData));
        setRecentRepos(getRecentRepos(reposData, 6));
      }
      setLoading(false);
    };

    loadGitHubData();
  }, []);

  const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Go: '#00ADD8',
    Ruby: '#701516',
  };

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-700 rounded w-64 mx-auto mb-8"></div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-48 bg-gray-800 rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
  const totalForks = repos.reduce((sum, repo) => sum + (repo.forks_count || 0), 0);

  return (
    <section id="github" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mb-4">
            GitHub Portfolio
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my open-source contributions and project repositories
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <FaBook className="w-8 h-8 text-purple-400" />
              <span className="text-3xl font-bold text-white">{repos.length}</span>
            </div>
            <p className="text-gray-300 text-sm">Public Repositories</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <FaStar className="w-8 h-8 text-yellow-400" />
              <span className="text-3xl font-bold text-white">{totalStars}</span>
            </div>
            <p className="text-gray-300 text-sm">Total Stars</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <FaCodeBranch className="w-8 h-8 text-green-400" />
              <span className="text-3xl font-bold text-white">{totalForks}</span>
            </div>
            <p className="text-gray-300 text-sm">Total Forks</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <FaGithub className="w-8 h-8 text-blue-400" />
              <span className="text-3xl font-bold text-white">{profile?.followers || 0}</span>
            </div>
            <p className="text-gray-300 text-sm">Followers</p>
          </motion.div>
        </div>

        {/* Language Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12"
        >
          <div className="flex items-center mb-6">
            <FaCode className="w-6 h-6 text-purple-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">Top Languages</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {languageStats.map((stat, index) => (
              <motion.div
                key={stat.language}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{
                    backgroundColor: languageColors[stat.language] || '#6b7280',
                    boxShadow: `0 0 20px ${languageColors[stat.language] || '#6b7280'}40`
                  }}
                >
                  <FaCode className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-semibold text-sm mb-1">{stat.language}</p>
                <p className="text-gray-400 text-xs">{stat.count} repos</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Recent Repositories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentRepos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                      {repo.name}
                    </h4>
                    {repo.description && (
                      <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                        {repo.description}
                      </p>
                    )}
                  </div>
                  <FaGithub className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors ml-2" />
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-400 mt-4">
                  {repo.language && (
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: languageColors[repo.language] || '#6b7280' }}
                      ></span>
                      <span>{repo.language}</span>
                    </div>
                  )}
                  {repo.stargazers_count > 0 && (
                    <div className="flex items-center gap-1">
                      <FaStar className="w-3 h-3 text-yellow-400" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                  )}
                  {repo.forks_count > 0 && (
                    <div className="flex items-center gap-1">
                      <FaCodeBranch className="w-3 h-3 text-green-400" />
                      <span>{repo.forks_count}</span>
                    </div>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href={`https://github.com/${profile?.login || 'LEKKALA-BHASKAR'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            <FaGithub className="w-5 h-5" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default GitHubStats;
