import './assets/styles.css';
import heroImage from './assets/hero.png';

const versions = [
  { id: 1, path: '/v1', label: 'Version 1' },
  { id: 2, path: '/v2', label: 'Version 2' },
  { id: 3, path: '/v3', label: 'Version 3' },
  { id: 4, path: '/v4', label: 'Version 4' },
  { id: 5, path: '/v5', label: 'Version 5' }
];

function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <div className="app-title-block">
          <h1>Hello WAR – Frontend Gateway</h1>
          <p className="app-subtitle">
            React frontend on NGINX → Java WAR on Tomcat (v1–v5).
          </p>
        </div>
        <div className="app-hero-image">
          <img src={heroImage} alt="Hello WAR Architecture" />
        </div>
      </header>

      <main className="app-main">
        <section className="version-section">
          <h2>Backend Versions</h2>
          <p className="version-description">
            Each card routes through NGINX to a different backend endpoint
            on the Tomcat server. For now, they’re simple HTML pages showing
            release number and artifact version.
          </p>

          <div className="version-grid">
            {versions.map((ver) => (
              <a key={ver.id} href={ver.path} className="version-card">
                <div className="version-label">{ver.label}</div>
                <div className="version-path">{ver.path}</div>
                <p className="version-hint">
                  Proxied to <code>/hello/version{ver.id}</code> on backend.
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="notes-section">
          <h3>What this page is doing</h3>
          <ul>
            <li>Static React build will be served from NGINX on the FE EC2.</li>
            <li>
              Links <code>/v1</code>.. <code>/v5</code> will be proxied to the
              backend EC2 Tomcat endpoints.
            </li>
            <li>No API calls yet, just basic HTML link + reverse proxy.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
