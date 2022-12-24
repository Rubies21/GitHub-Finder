class Github {
    constructor() {
      this.client_id = 'Iv1.f31dd95cd8e9fec4';
      this.client_secret = 'b69086733264c3c74a86c5d0a6a4f381020a0fe8';
      this.repos_count = 5;
      this.repos_sort = "created: asc";
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

  
      const profile = await profileResponse.json();
      const repos = await reposResponse.json();
  
      return {
        profile: profile,
        repos: repos
      }
    }
  }