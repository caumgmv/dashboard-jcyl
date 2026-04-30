const METRICS = [
  {
    key: "Vehiculos",
    page: "vehiculos.html",
    pageId: "vehiculos",
    summaryId: "vehiculosSummary",
    chartId: "vehiculosChart",
    label: "Vehiculos",
    color: "#2563eb",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 17h14M6 17l1.6-6.2A3 3 0 0 1 10.5 8h3a3 3 0 0 1 2.9 2.3L18 17M7 17v1.2M17 17v1.2M8.5 13h7"></path></svg>'
  },
  {
    key: "VehiculosInstalados",
    page: "vehiculos-instalados.html",
    pageId: "vehiculos-instalados",
    summaryId: "vehiculosInstaladosSummary",
    chartId: "vehiculosInstaladosChart",
    label: "Vehículos instalados",
    tooltip: "Porcentaje de vehículos con alguna posición de SIRI en N5",
    color: "#14746f",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h5l2 2 7-7M5 17h14M6 17l1.6-6.2A3 3 0 0 1 10.5 8h3a3 3 0 0 1 2.9 2.3L18 17M7 17v1.2M17 17v1.2"></path></svg>'
  },
  {
    key: "VehiculosActivos",
    page: "vehiculos-activos.html",
    pageId: "vehiculos-activos",
    summaryId: "vehiculosActivosSummary",
    chartId: "vehiculosActivosChart",
    label: "Vehículos activos",
    tooltip: "Porcentaje de vehiculos con alguna posición recibida en N5 en los ultimos 2 dias",
    color: "#0f9d58",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h5l2 3 4-8 2 5h5"></path></svg>'
  },
  {
    key: "VehiculosTicketingN3",
    page: "vehiculos-ticketing-n3.html",
    pageId: "vehiculos-ticketing-n3",
    summaryId: "vehiculosTicketingN3Summary",
    chartId: "vehiculosTicketingN3Chart",
    label: "Vehículos ticketing N3",
    tooltip: "Porcentaje de vehiculos con alguna validación en N3 en los ultimos 7 dias",
    color: "#2563eb",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M6 7v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M8 11h4M8 15h8M16 4v6"></path></svg>'
  },
  {
    key: "VehiculosTicketing",
    page: "vehiculos-ticketing.html",
    pageId: "vehiculos-ticketing",
    summaryId: "vehiculosTicketingSummary",
    chartId: "vehiculosTicketingChart",
    label: "Vehículos ticketing N5",
    tooltip: "Porcentaje de vehiculos con alguna validación en N5 en los ultimos 7 dias",
    color: "#2563eb",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M6 7v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M8 11h4M8 15h8M16 4v6"></path></svg>'
  },
  {
    key: "Conductores",
    page: "conductores.html",
    pageId: "conductores",
    summaryId: "conductoresSummary",
    chartId: "conductoresChart",
    label: "Conductores",
    color: "#16a34a",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path></svg>'
  },
  {
    key: "Topologia",
    page: "topologia.html",
    pageId: "topologia",
    summaryId: "topologiaSummary",
    chartId: "topologiaChart",
    label: "Topologia",
    color: "#7c3aed",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7l5-3 6 3 5-3v13l-5 3-6-3-5 3V7zM9 4v13M15 7v13"></path></svg>'
  },
  {
    key: "Horarios",
    page: "horarios.html",
    pageId: "horarios",
    summaryId: "horariosSummary",
    chartId: "horariosChart",
    label: "Horarios",
    color: "#d97706",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path></svg>'
  },
  {
    key: "RtigExpediciones",
    page: "rtig-expediciones.html",
    pageId: "rtig-expediciones",
    summaryId: "rtigExpedicionesSummary",
    chartId: "rtigExpedicionesChart",
    label: "RTIG expediciones",
    color: "#dc2626",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18V6a2 2 0 0 1 2-2h9l5 5v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM14 4v6h6M8 14h8M8 17h5"></path></svg>'
  },
  {
    key: "RtigParadas",
    page: "rtig-paradas.html",
    pageId: "rtig-paradas",
    summaryId: "rtigParadasSummary",
    chartId: "rtigParadasChart",
    label: "RTIG paradas",
    color: "#0891b2",
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11zM12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z"></path></svg>'
  }
];

const METRIC_BY_PAGE = new Map(METRICS.map((metric) => [metric.pageId, metric]));
const METRIC_BY_KEY = new Map(METRICS.map((metric) => [metric.key, metric]));

const DEFAULT_THRESHOLDS = {
  green: 95,
  yellow: 50
};

const RATIO_METRIC_FIELDS = {
  VehiculosInstalados: "InstalledCount",
  VehiculosActivos: "ActiveCount",
  VehiculosTicketingN3: "ActiveCount",
  VehiculosTicketing: "ActiveCount",
};

const UNKNOWN_INTEGRATOR = "Desconocido";
const INTEGRATOR_FILTERS = ["GMV", "Proconsi", UNKNOWN_INTEGRATOR];
const INTEGRATOR_LABELS = {
  [UNKNOWN_INTEGRATOR]: "Sin asignar",
};

const HELP_SECTIONS = [
  {
    title: "Vehículos",
    text: "Porcentaje de vehículos del parque total cuya información está correctamente registrada en el Sistema Central. Las discrepancias indican vehículos con datos inconsistentes o ausentes en la base de datos maestra.",
  },
  {
    title: "Vehículos instalados",
    text: "Porcentaje de vehículos del parque total de los que se ha recibido al menos una comunicación reciente desde su equipamiento de a bordo (OBU). Un vehículo se considera instalado cuando el sistema central tiene constancia de actividad dentro del periodo de referencia.",
  },
  {
    title: "Vehículos activos",
    text: "Porcentaje de vehículos instalados que han registrado actividad operativa en el periodo analizado. Un valor inferior al de vehículos instalados indica unidades equipadas pero sin servicio reciente.",
  },
  {
    title: "Vehículos ticketing N3",
    text: "Porcentaje de vehículos del parque total que han generado datos de validación registrados en el sistema de ticketing N3. Un valor bajo puede indicar que parte de la flota no ha generado validaciones recientes o que hay incidencias en la transmisión de eventos de validación.",
  },
  {
    title: "Vehículos ticketing N5",
    text: "Porcentaje de vehículos del parque total que han generado datos de validación registrados en el módulo de ticketing N5. Un valor bajo puede indicar que parte de la flota aún no opera con el sistema de validación integrado o que hay incidencias en la transmisión de eventos de validación.",
  },
  {
    title: "Conductores",
    text: "Porcentaje de conductores sincronizados correctamente entre el sistema de gestión y el equipamiento de a bordo. Esta sincronización es automática, por lo que cualquier discrepancia refleja un error que debe ser investigado y resuelto con carácter prioritario.",
  },
  {
    title: "Topología",
    text: "Porcentaje de elementos de topología (líneas, paradas, rutas) correctamente sincronizados en los equipos de a bordo. Las discrepancias en este indicador implican que determinadas paradas pueden no ser detectadas correctamente durante la operación, afectando al registro de expediciones y a la calidad del servicio. Requiere atención prioritaria.",
  },
  {
    title: "Horarios",
    text: "Porcentaje de horarios correctamente sincronizados en los vehículos. Las discrepancias pueden provocar que expediciones programadas no sean reconocidas por el sistema, generando saltos en el registro de servicio. Requiere atención prioritaria.",
  },
  {
    title: "RTIG - Expediciones / Paradas",
    text: "Los indicadores RTIG reflejan la coherencia de los datos de posicionamiento y paso por parada reportados en tiempo real. Las discrepancias son en gran medida consecuencia directa de los errores de sincronización de Topología y Horarios: una vez corregidos estos, se espera una mejora significativa en los valores RTIG.",
  },
  {
    title: 'Vista "Global por concesión"',
    text: "Esta vista desglosa todos los indicadores anteriores de forma individual para cada concesión operativa. Permite identificar qué concesiones presentan mayor número de discrepancias y priorizar las acciones correctoras, facilitando la coordinación con cada operador de forma independiente.",
  },
];

let globalConcesionesData = [];
let globalConcesionesSort = {
  key: "total",
  direction: "asc",
};
let globalConcesionesIntegratorFilters = new Set(INTEGRATOR_FILTERS);
let globalDashboardRows = [];
let globalIntegratorModalData = [];

document.addEventListener("DOMContentLoaded", async () => {
  setupNavigation();
  setupHelpButton();

  const page = document.body ? document.body.dataset.page : "";
  if (page === "auth-error") {
    renderAuthError();
    return;
  }

  if (!await ensureAuthenticated()) {
    return;
  }

  const csvText = getEmbeddedCsvData();

  if (page === "global-actual") {
    renderDashboardFromCsv(csvText);
    return;
  }

  if (page === "global-evolucion") {
    renderEvolutionFromCsv(csvText);
    return;
  }

  if (page === "global-concesiones") {
    renderGlobalConcesionesFromCsv(csvText);
    return;
  }

  const metric = METRIC_BY_PAGE.get(page);
  if (metric) {
    ensureBackButton();
    renderMetricBarsFromCsv(csvText, metric);
  }
});

async function ensureAuthenticated() {
  const auth = getAuthConfig();
  if (!auth.enabled) {
    return true;
  }

  const token = readAuthToken(auth.tokenStorageKey);
  if (!token) {
    redirectAuthError("missing-token");
    return false;
  }

  const validation = await callAuthenticatedEndpoint(auth.operatorsUrl, token, "GET");
  if (validation.ok) {
    return true;
  }

  if (validation.status !== 401) {
    redirectAuthError("auth-check-failed");
    return false;
  }

  const renewedToken = await renewAuthToken(auth, token);
  if (!renewedToken) {
    redirectAuthError("token-expired");
    return false;
  }

  storeAuthToken(auth.tokenStorageKey, renewedToken);
  const retry = await callAuthenticatedEndpoint(auth.operatorsUrl, renewedToken, "GET");
  if (retry.ok) {
    return true;
  }

  redirectAuthError(retry.status === 401 ? "token-expired" : "auth-check-failed");
  return false;
}

function getAuthConfig() {
  const configured = window.MISMATCHES_CONFIG && window.MISMATCHES_CONFIG.auth
    ? window.MISMATCHES_CONFIG.auth
    : {};

  return {
    enabled: configured.enabled === true,
    tokenStorageKey: configured.token_storage_key || "JWT_TOKEN",
    operatorsUrl: configured.operators_url || "http://localhost:8080/ocapi/api/operators",
    renewUrl: configured.renew_url || "http://localhost:8080/ocapi/api/login/renew",
  };
}

function readAuthToken(tokenStorageKey) {
  try {
    return localStorage.getItem(tokenStorageKey) || "";
  } catch (error) {
    return "";
  }
}

function storeAuthToken(tokenStorageKey, token) {
  try {
    localStorage.setItem(tokenStorageKey, token);
  } catch (error) {
    // Si localStorage no está disponible, se redirigirá al volver a validar.
  }
}

async function callAuthenticatedEndpoint(url, token, method) {
  try {
    const response = await fetch(url, {
      method,
      cache: "no-store",
      headers: buildAuthHeaders(token),
    });

    return {
      ok: response.ok,
      status: response.status,
      response,
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      response: null,
    };
  }
}

function buildAuthHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/json, text/plain, */*",
  };
}

async function renewAuthToken(auth, token) {
  const renewedByPost = await requestRenewedToken(auth.renewUrl, token, "POST");
  if (renewedByPost) {
    return renewedByPost;
  }

  return requestRenewedToken(auth.renewUrl, token, "GET");
}

async function requestRenewedToken(url, token, method) {
  const result = await callAuthenticatedEndpoint(url, token, method);
  if (!result.ok || !result.response) {
    return "";
  }

  const rawToken = await result.response.text();
  return parseRenewedToken(rawToken);
}

function parseRenewedToken(rawToken) {
  const trimmed = String(rawToken || "").trim();
  if (!trimmed) {
    return "";
  }

  try {
    const parsed = JSON.parse(trimmed);
    return typeof parsed === "string" ? parsed : "";
  } catch (error) {
    return trimmed.replace(/^"|"$/g, "");
  }
}

function redirectAuthError(reason) {
  const target = `auth-error.html?reason=${encodeURIComponent(reason || "unauthenticated")}`;
  if (!window.location.pathname.endsWith("/auth-error.html")) {
    window.location.href = target;
  }
}

function renderAuthError() {
  const reason = new URLSearchParams(window.location.search).get("reason") || "unauthenticated";
  const detail = document.getElementById("authErrorDetail");
  if (!detail) {
    return;
  }

  const messages = {
    "missing-token": "Usuario no autenticado. Entre de nuevo en ITS Suite.",
    "token-expired": "La sesión ha caducado. Entre de nuevo en ITS Suite.",
    "auth-check-failed": "No se ha podido validar la sesión. Entre de nuevo en ITS Suite.",
    unauthenticated: "Usuario no autenticado. Entre de nuevo en ITS Suite.",
  };

  detail.textContent = messages[reason] || messages.unauthenticated;
}

function setupNavigation() {
  const sidebar = document.getElementById("sidebar");
  const button = document.getElementById("menuButton");
  const backdrop = document.getElementById("backdrop");

  if (!sidebar || !button || !backdrop) {
    return;
  }

  const setOpen = (open) => {
    sidebar.classList.toggle("open", open);
    backdrop.classList.toggle("visible", open);
    sidebar.setAttribute("aria-hidden", String(!open));
    button.setAttribute("aria-expanded", String(open));
  };

  button.addEventListener("click", () => setOpen(!sidebar.classList.contains("open")));
  backdrop.addEventListener("click", () => setOpen(false));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  });
}

function getTopbarActions() {
  const topbar = document.querySelector(".topbar");
  if (!topbar) {
    return null;
  }

  let actions = topbar.querySelector(".topbar-actions");
  if (!actions) {
    actions = document.createElement("div");
    actions.className = "topbar-actions";
    topbar.appendChild(actions);
  }
  return actions;
}

function setupHelpButton() {
  const actions = getTopbarActions();
  if (!actions || actions.querySelector(".help-button")) {
    return;
  }

  const button = document.createElement("button");
  button.className = "help-button";
  button.type = "button";
  button.setAttribute("aria-label", "Ver ayuda de indicadores");
  button.title = "Ayuda";
  button.textContent = "?";
  button.addEventListener("click", openHelpModal);
  actions.appendChild(button);
}

function openHelpModal() {
  closeHelpModal();
  const modal = document.createElement("div");
  modal.className = "help-modal-backdrop";
  modal.dataset.helpModal = "true";
  modal.innerHTML = `
    <section class="help-modal" role="dialog" aria-modal="true" aria-labelledby="helpModalTitle">
      <div class="help-modal-header">
        <h2 id="helpModalTitle">Ayuda de indicadores</h2>
        <button class="modal-close-button" type="button" data-help-modal-close aria-label="Cerrar">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18"></path>
          </svg>
        </button>
      </div>
      <div class="help-modal-body">
        ${HELP_SECTIONS.map((section) => `
          <section class="help-modal-section">
            <h3>${escapeHtml(section.title)}</h3>
            <p>${escapeHtml(section.text)}</p>
          </section>
        `).join("")}
      </div>
    </section>
  `;

  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest("[data-help-modal-close]")) {
      closeHelpModal();
    }
  });
  document.addEventListener("keydown", handleHelpModalKeydown);
  document.body.appendChild(modal);
  modal.querySelector("[data-help-modal-close]")?.focus();
}

function closeHelpModal() {
  document.querySelectorAll("[data-help-modal='true']").forEach((modal) => modal.remove());
  document.removeEventListener("keydown", handleHelpModalKeydown);
}

function handleHelpModalKeydown(event) {
  if (event.key === "Escape") {
    closeHelpModal();
  }
}

function getEmbeddedCsvData() {
  return combineEmbeddedCsvTexts(
    typeof window.MISMATCHES_CSV === "string" ? window.MISMATCHES_CSV : "",
    typeof window.SIRI_CSV === "string" ? window.SIRI_CSV : "",
    typeof window.TICKETING_CSV === "string" ? window.TICKETING_CSV : ""
  );
}

function combineEmbeddedCsvTexts(...texts) {
  const normalizedTexts = texts
    .map((text) => String(text || "").replace(/\r\n/g, "\n").trim())
    .filter(Boolean);

  if (!normalizedTexts.length) {
    return "";
  }

  const headers = [
    "ExecutionDate",
    "Scope",
    "OrganizationAppId",
    "Integrator",
    "Metric",
    "AnalysisDate",
    "MismatchCount",
    "ActiveCount",
    "InstalledCount",
    "TotalCount",
    "SyncPercent",
    "IgnoreOrganizations",
  ];
  const rows = normalizedTexts.flatMap((text) => parseCsv(text));
  if (!rows.length) {
    return "";
  }

  const csvRows = rows.map((row) => headers.map((header) => escapeCsvValue(row[header] || "")).join(","));
  return [headers.join(","), ...csvRows].join("\n");
}

function escapeCsvValue(value) {
  const text = String(value ?? "");
  if (!/[",\n\r]/.test(text)) {
    return text;
  }
  return `"${text.replaceAll('"', '""')}"`;
}

function renderDashboardFromCsv(csvText) {
  const rows = parseCsv(csvText);
  globalDashboardRows = rows;
  globalConcesionesIntegratorFilters = new Set(INTEGRATOR_FILTERS);
  const globalRows = rows.filter((row) => normalize(row.Scope) === "GLOBAL");

  if (!globalRows.length) {
    showStatus("No hay filas GLOBAL en el CSV.");
    renderEmptyCards();
    return;
  }

  const rowByMetric = getLatestRowsByMetric(globalRows);
  const latestExecution = getLatestExecution(Array.from(rowByMetric.values()));

  hideStatus();
  renderLastRun(latestExecution);
  renderGlobalConcesionesIntegratorFilters(buildIntegratorFilterDataFromRows(rows));
  renderMetricCards(rowByMetric);
}

function renderDashboardCardsForCurrentFilters() {
  const globalRows = globalDashboardRows.filter((row) => normalize(row.Scope) === "GLOBAL");
  if (!globalRows.length) {
    renderEmptyCards();
    return;
  }

  const latestExecution = getLatestExecution(globalRows);
  renderLastRun(latestExecution);

  if (areAllIntegratorFiltersSelected()) {
    hideStatus();
    renderMetricCards(getLatestRowsByMetric(globalRows));
    return;
  }

  const rowByMetric = buildMetricRowsForSelectedIntegrators(globalDashboardRows);
  if (!rowByMetric.size) {
    showStatus("Selecciona al menos un integrador con datos.");
    renderEmptyCards();
    return;
  }

  hideStatus();
  renderMetricCards(rowByMetric);
}

function buildMetricRowsForSelectedIntegrators(rows) {
  const globalRowByMetric = getLatestRowsByMetric(
    rows.filter((row) => normalize(row.Scope) === "GLOBAL")
  );
  const orgRows = getLatestRowsByOrgAndMetric(
    rows.filter((row) => normalize(row.Scope) === "ORG")
  ).filter((row) => rowMatchesIntegratorFilters(
    { integrator: getRowIntegrator(row) },
    globalConcesionesIntegratorFilters
  ));

  const rowByMetric = new Map();
  METRICS.forEach((metric) => {
    const metricRows = orgRows.filter((row) => row.Metric === metric.key);
    if (!metricRows.length) {
      return;
    }

    rowByMetric.set(metric.key, aggregateMetricRows(metric, metricRows, globalRowByMetric.get(metric.key)));
  });

  return rowByMetric;
}

function aggregateMetricRows(metric, rows, globalRow) {
  const rawTotal = sumNumberField(rows, "TotalCount");
  const globalTotal = toNumber(globalRow && globalRow.TotalCount);
  const total = capAggregateCount(rawTotal, globalTotal);
  const mismatches = sumNumberField(rows, "MismatchCount");
  const active = capAggregateCount(sumNumberField(rows, "ActiveCount"), toNumber(globalRow && globalRow.ActiveCount));
  const installed = capAggregateCount(sumNumberField(rows, "InstalledCount"), toNumber(globalRow && globalRow.InstalledCount));
  const row = {
    ExecutionDate: getLatestExecution(rows),
    Scope: "GLOBAL",
    OrganizationAppId: "",
    Integrator: "",
    Metric: metric.key,
    AnalysisDate: "",
    MismatchCount: Number.isFinite(mismatches) ? String(mismatches) : "",
    ActiveCount: Number.isFinite(active) ? String(active) : "",
    InstalledCount: Number.isFinite(installed) ? String(installed) : "",
    TotalCount: Number.isFinite(total) ? String(total) : "",
    SyncPercent: "",
    IgnoreOrganizations: "",
  };

  if (isRatioMetric(metric.key)) {
    const rawNumerator = sumRatioNumerator(rows, metric.key);
    const numerator = capAggregateCount(rawNumerator, toNumber(globalRow && globalRow[RATIO_METRIC_FIELDS[metric.key]]));
    if (Number.isFinite(numerator) && Number.isFinite(total) && total > 0) {
      const boundedNumerator = getBoundedRatioNumerator(numerator, total);
      const percentDenominator = Number.isFinite(rawTotal) && rawTotal > 0 ? rawTotal : total;
      const percentNumerator = Number.isFinite(rawNumerator)
        ? getBoundedRatioNumerator(rawNumerator, percentDenominator)
        : boundedNumerator;
      row[RATIO_METRIC_FIELDS[metric.key]] = String(boundedNumerator);
      row.SyncPercent = ((percentNumerator / percentDenominator) * 100).toFixed(1);
      row.MismatchCount = String(Math.max(total - boundedNumerator, 0));
    }
    return row;
  }

  if (metric.key === "Vehiculos" && Number.isFinite(total) && total > 0) {
    const percentDenominator = Number.isFinite(rawTotal) && rawTotal > 0 ? rawTotal : total;
    row.SyncPercent = ((Math.max(percentDenominator - mismatches, 0) / percentDenominator) * 100).toFixed(1);
    return row;
  }

  const syncValues = rows
    .map((item) => toNumber(item.SyncPercent))
    .filter(Number.isFinite);
  if (syncValues.length) {
    row.SyncPercent = (syncValues.reduce((sum, value) => sum + value, 0) / syncValues.length).toFixed(1);
  }
  return row;
}

function capAggregateCount(value, maxValue) {
  if (!Number.isFinite(value)) {
    return value;
  }
  if (!Number.isFinite(maxValue) || maxValue <= 0) {
    return value;
  }
  return Math.min(value, maxValue);
}

function sumNumberField(rows, fieldName) {
  const values = rows
    .map((row) => toNumber(row && row[fieldName]))
    .filter(Number.isFinite);
  if (!values.length) {
    return NaN;
  }
  return values.reduce((sum, value) => sum + value, 0);
}

function sumRatioNumerator(rows, metricKey) {
  const values = rows
    .map((row) => getRatioNumerator(row, metricKey))
    .filter(Number.isFinite);
  if (!values.length) {
    return NaN;
  }
  return values.reduce((sum, value) => sum + value, 0);
}

function areAllIntegratorFiltersSelected() {
  return INTEGRATOR_FILTERS.every((filter) => globalConcesionesIntegratorFilters.has(filter));
}

function renderMetricCards(rowByMetric) {
  const grid = document.getElementById("cardsGrid");
  if (!grid) {
    return;
  }

  grid.innerHTML = METRICS.map((metric) => {
    const row = rowByMetric.get(metric.key);
    const value = toNumber(row && row.SyncPercent);
    const subtext = getMetricCardSubtext(metric, row);
    const state = getState(value);
    const valueText = Number.isFinite(value) ? `${value.toFixed(1)}%` : "N/D";
    const tooltip = metric.tooltip ? ` title="${escapeHtml(metric.tooltip)}"` : "";

    return `
      <a class="metric-card-link" href="${metric.page}" aria-label="Ver detalle ${escapeHtml(metric.label)}">
        <article class="metric-card ${state}"${tooltip}>
          <div class="card-top">
            <h2 class="metric-name">${escapeHtml(metric.label)}</h2>
            <span class="metric-icon">${metric.icon}</span>
          </div>
          <p class="metric-value">${valueText}</p>
          <p class="metric-subtext">${escapeHtml(subtext)}</p>
        </article>
      </a>
    `;
  }).join("");
}

function getMetricCardSubtext(metric, row) {
  if (metric.key === "Vehiculos") {
    const mismatchCount = row ? row.MismatchCount || "0" : "N/D";
    const totalCount = toNumber(row && row.TotalCount);
    const totalText = Number.isFinite(totalCount) ? totalCount : "N/D";
    return `Discrepancias: ${String(mismatchCount)} | Total: ${totalText}`;
  }

  if (metric.key === "VehiculosInstalados") {
    const installedCount = toNumber(row && row.InstalledCount);
    const totalCount = toNumber(row && row.TotalCount);
    const activeCount = toNumber(row && row.ActiveCount);
    const installedText = Number.isFinite(installedCount) ? installedCount : "N/D";
    const totalText = Number.isFinite(totalCount) ? totalCount : "N/D";
    const activeText = Number.isFinite(activeCount) ? activeCount : "N/D";
    return `Instalados: ${installedText} | Total: ${totalText} | Activos: ${activeText}`;
  }

  if (metric.key === "VehiculosActivos") {
    const activeCount = toNumber(row && row.ActiveCount);
    const installedCount = toNumber(row && row.InstalledCount);
    const totalCount = toNumber(row && row.TotalCount);
    const activeText = Number.isFinite(activeCount) ? activeCount : "N/D";
    const installedText = Number.isFinite(installedCount) ? installedCount : "N/D";
    const totalText = Number.isFinite(totalCount) ? totalCount : "N/D";
    return `Activos: ${activeText} | Instalados: ${installedText} | Total: ${totalText}`;
  }

  if (metric.key === "VehiculosTicketingN3" || metric.key === "VehiculosTicketing") {
    const activeCount = toNumber(row && row.ActiveCount);
    const totalCount = toNumber(row && row.TotalCount);
    const activeText = Number.isFinite(activeCount) ? activeCount : "N/D";
    const totalText = Number.isFinite(totalCount) ? totalCount : "N/D";
    return `Con validación: ${activeText} | Total: ${totalText}`;
  }

  const mismatchCount = row ? row.MismatchCount || "0" : "N/D";
  return `Discrepancias: ${String(mismatchCount)}`;
}

function renderEmptyCards() {
  const grid = document.getElementById("cardsGrid");
  if (!grid) {
    return;
  }

  grid.innerHTML = METRICS.map((metric) => `
    <a class="metric-card-link" href="${metric.page}" aria-label="Ver detalle ${escapeHtml(metric.label)}">
      <article class="metric-card bad">
        <div class="card-top">
          <h2 class="metric-name">${escapeHtml(metric.label)}</h2>
          <span class="metric-icon">${metric.icon}</span>
        </div>
        <p class="metric-value">N/D</p>
        <p class="metric-subtext">Discrepancias: N/D</p>
      </article>
    </a>
  `).join("");
}

function renderEvolutionFromCsv(csvText) {
  const rows = parseCsv(csvText);
  const dailyData = buildDailyGlobalData(rows);

  if (!dailyData.days.length) {
    showStatus("No hay datos GLOBAL para pintar la evolucion.");
    renderEmptyEvolution();
    return;
  }

  hideStatus();
  renderEvolutionSummary(dailyData.days);
  renderEvolutionChart(dailyData);
}

function buildDailyGlobalData(rows) {
  const metricKeys = new Set(METRICS.map((metric) => metric.key));
  const latestByDayMetric = new Map();

  rows
    .filter((row) => normalize(row.Scope) === "GLOBAL" && metricKeys.has(row.Metric))
    .forEach((row) => {
      const day = getExecutionDay(row.ExecutionDate);
      const value = toNumber(row.SyncPercent);
      if (!day || !Number.isFinite(value)) {
        return;
      }

      const key = `${day}|${row.Metric}`;
      const current = latestByDayMetric.get(key);
      if (!current || compareExecutionDates(row.ExecutionDate, current.ExecutionDate) > 0) {
        latestByDayMetric.set(key, { ...row, Day: day, SyncValue: value });
      }
    });

  const days = Array.from(
    new Set(Array.from(latestByDayMetric.values()).map((row) => row.Day))
  ).sort();

  const series = METRICS.map((metric) => ({
    ...metric,
    points: days.map((day) => {
      const row = latestByDayMetric.get(`${day}|${metric.key}`);
      return {
        day,
        value: row ? row.SyncValue : null,
      };
    }),
  }));

  return { days, series };
}

function renderEvolutionSummary(days) {
  const summary = document.getElementById("evolutionSummary");
  if (!summary) {
    return;
  }

  const first = formatDay(days[0]);
  const last = formatDay(days[days.length - 1]);
  summary.textContent = days.length === 1
    ? `1 dia disponible: ${first}`
    : `${days.length} dias disponibles: ${first} - ${last}`;
}

function renderEvolutionChart(data) {
  const chart = document.getElementById("evolutionChart");
  const legend = document.getElementById("evolutionLegend");
  if (!chart || !legend) {
    return;
  }

  const width = 1000;
  const height = 460;
  const pad = { top: 26, right: 28, bottom: 58, left: 58 };
  const chartWidth = width - pad.left - pad.right;
  const chartHeight = height - pad.top - pad.bottom;

  const xForIndex = (index) => {
    if (data.days.length <= 1) {
      return pad.left + chartWidth / 2;
    }
    return pad.left + (index / (data.days.length - 1)) * chartWidth;
  };
  const yForValue = (value) => pad.top + ((100 - value) / 100) * chartHeight;

  const yTicks = [0, 25, 50, 75, 100];
  const xTickIndexes = getTickIndexes(data.days.length, 6);

  const grid = yTicks.map((tick) => {
    const y = yForValue(tick);
    return `
      <line class="chart-grid-line" x1="${pad.left}" y1="${y}" x2="${width - pad.right}" y2="${y}"></line>
      <text class="chart-y-label" x="${pad.left - 10}" y="${y + 4}" text-anchor="end">${tick}%</text>
    `;
  }).join("");

  const xLabels = xTickIndexes.map((index) => {
    const x = xForIndex(index);
    return `<text class="chart-x-label" x="${x}" y="${height - 20}" text-anchor="middle">${escapeHtml(formatDay(data.days[index]))}</text>`;
  }).join("");

  const thresholdLines = [
    { value: getThresholds().green, className: "chart-threshold-good" },
    { value: getThresholds().yellow, className: "chart-threshold-warning" },
  ].map((threshold) => {
    const y = yForValue(threshold.value);
    return `<line class="${threshold.className}" x1="${pad.left}" y1="${y}" x2="${width - pad.right}" y2="${y}"></line>`;
  }).join("");

  const paths = data.series.map((serie) => {
    const points = serie.points
      .map((point, index) => point.value === null ? null : {
        x: xForIndex(index),
        y: yForValue(point.value),
        day: point.day,
        value: point.value,
      })
      .filter(Boolean);

    if (!points.length) {
      return "";
    }

    const path = points
      .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`)
      .join(" ");

    const circles = points.map((point) => `
      <circle class="chart-point" cx="${point.x.toFixed(2)}" cy="${point.y.toFixed(2)}" r="4" fill="${serie.color}">
        <title>${escapeHtml(serie.label)} - ${escapeHtml(formatDay(point.day))}: ${point.value.toFixed(1)}%</title>
      </circle>
    `).join("");

    return `<path class="chart-line" d="${path}" stroke="${serie.color}"></path>${circles}`;
  }).join("");

  chart.innerHTML = `
    <svg class="evolution-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Evolucion diaria de sincronias globales">
      <rect class="chart-bg" x="0" y="0" width="${width}" height="${height}" rx="8"></rect>
      ${grid}
      ${thresholdLines}
      <line class="chart-axis" x1="${pad.left}" y1="${height - pad.bottom}" x2="${width - pad.right}" y2="${height - pad.bottom}"></line>
      <line class="chart-axis" x1="${pad.left}" y1="${pad.top}" x2="${pad.left}" y2="${height - pad.bottom}"></line>
      ${paths}
      ${xLabels}
    </svg>
  `;

  legend.innerHTML = data.series.map((serie) => `
    <span class="legend-item">
      <span class="legend-color" style="background:${serie.color}"></span>
      ${escapeHtml(serie.label)}
    </span>
  `).join("");
}

function renderGlobalConcesionesFromCsv(csvText) {
  const rows = parseCsv(csvText);
  const orgRows = rows.filter((row) => normalize(row.Scope) === "ORG");

  if (!orgRows.length) {
    showStatus("No hay filas ORG en el CSV.");
    renderEmptyGlobalConcesiones();
    return;
  }

  const latestRows = getLatestRowsByOrgAndMetric(orgRows);
  const rowByOrg = new Map();

  latestRows.forEach((row) => {
    const org = String(row.OrganizationAppId || "").trim();
    if (!org) {
      return;
    }

    if (!rowByOrg.has(org)) {
      rowByOrg.set(org, new Map());
    }
    rowByOrg.get(org).set(row.Metric, row);
  });

  const data = Array.from(rowByOrg.entries())
    .map(([org, metrics]) => ({
      org,
      integrator: getIntegratorFromMetricRows(metrics),
      metrics,
      totalPercent: getTotalMetricPercent(metrics),
      totalMismatches: getTotalMismatches(metrics),
    }));
  const latestExecution = getLatestExecution(latestRows);

  hideStatus();
  globalConcesionesData = data;
  globalConcesionesSort = { key: "total", direction: "asc" };
  globalConcesionesIntegratorFilters = new Set(INTEGRATOR_FILTERS);
  renderGlobalConcesionesSummary(latestExecution, data);
  renderGlobalConcesionesIntegratorFilters(data);
  renderGlobalConcesionesTable();
}

function compareGlobalConcesionRows(left, right, sortConfig = globalConcesionesSort) {
  const direction = sortConfig.direction === "desc" ? -1 : 1;
  let result = 0;

  if (sortConfig.key === "org") {
    result = left.org.localeCompare(right.org);
  } else if (sortConfig.key === "integrator") {
    result = left.integrator.localeCompare(right.integrator);
  } else {
    const leftValue = getGlobalSortValue(left, sortConfig.key);
    const rightValue = getGlobalSortValue(right, sortConfig.key);
    result = compareNullableNumbers(leftValue, rightValue);
  }

  if (result === 0) {
    result = left.org.localeCompare(right.org);
  }

  return result * direction;
}

function getLatestRowsByMetric(rows) {
  const latestByMetric = new Map();

  rows.forEach((row) => {
    const key = String(row.Metric || "").trim();
    if (!key) {
      return;
    }

    const current = latestByMetric.get(key);
    if (!current || compareExecutionDates(row.ExecutionDate, current.ExecutionDate) > 0) {
      latestByMetric.set(key, row);
    }
  });

  return latestByMetric;
}

function getLatestRowsByOrgAndMetric(rows) {
  const latestByOrgMetric = new Map();

  rows.forEach((row) => {
    const org = String(row.OrganizationAppId || "").trim();
    const metric = String(row.Metric || "").trim();
    if (!org || !metric) {
      return;
    }

    const key = `${org}|${metric}`;
    const current = latestByOrgMetric.get(key);
    if (!current || compareExecutionDates(row.ExecutionDate, current.ExecutionDate) > 0) {
      latestByOrgMetric.set(key, row);
    }
  });

  return Array.from(latestByOrgMetric.values());
}

function getGlobalSortValue(row, key) {
  if (key === "total") {
    return row.totalPercent;
  }

  const metricRow = row.metrics.get(key);
  return getMetricPercent(metricRow, key);
}

function compareNullableNumbers(left, right) {
  const leftValid = Number.isFinite(left);
  const rightValid = Number.isFinite(right);

  if (!leftValid && !rightValid) {
    return 0;
  }
  if (!leftValid) {
    return 1;
  }
  if (!rightValid) {
    return -1;
  }

  return left - right;
}

function getTotalMetricPercent(metricRows) {
  const values = METRICS
    .map((metric) => getMetricPercent(metricRows.get(metric.key), metric.key))
    .filter(Number.isFinite);

  if (!values.length) {
    return NaN;
  }

  return values.reduce((total, value) => total + value, 0) / values.length;
}

function getTotalMismatches(metricRows) {
  return METRICS
    .map((metric) => toNumber(metricRows.get(metric.key) && metricRows.get(metric.key).MismatchCount))
    .filter(Number.isFinite)
    .reduce((total, value) => total + value, 0);
}

function buildIntegratorFilterDataFromRows(rows) {
  const latestRows = getLatestRowsByOrgAndMetric(
    rows.filter((row) => normalize(row.Scope) === "ORG")
  );
  const rowByOrg = new Map();

  latestRows.forEach((row) => {
    const org = String(row.OrganizationAppId || "").trim();
    if (!org || rowByOrg.has(org)) {
      return;
    }
    rowByOrg.set(org, {
      org,
      integrator: getRowIntegrator(row),
    });
  });

  return Array.from(rowByOrg.values());
}

function renderGlobalConcesionesSummary(executionDate, data) {
  const summary = document.getElementById("globalConcesionesSummary");
  if (!summary) {
    return;
  }

  const affected = data.filter((row) => Number.isFinite(row.totalPercent) && row.totalPercent < 100).length;
  const integratorSummary = INTEGRATOR_FILTERS
    .map((filter) => `${formatIntegratorLabel(filter)}: ${countRowsByIntegrator(data, filter)}`)
    .join(" | ");
  summary.textContent = `Ultima ejecucion: ${formatExecutionDate(executionDate)} | ${data.length} concesiones | ${affected} con total por debajo de 100% | ${integratorSummary}`;
}

function renderGlobalConcesionesTable() {
  const container = document.getElementById("globalConcesionesTable");
  if (!container) {
    return;
  }

  const data = globalConcesionesData
    .filter((row) => rowMatchesIntegratorFilters(row, globalConcesionesIntegratorFilters))
    .sort((left, right) => compareGlobalConcesionRows(left, right));
  const headers = METRICS.map((metric) => renderSortableHeader(metric.key, metric.label)).join("");
  const body = data.map((row) => `
    <tr>
      <th scope="row" class="org-cell">${escapeHtml(row.org)}</th>
      <td class="integrator-cell">${renderIntegratorBadges(row.integrator)}</td>
      ${renderGlobalTotalCell(row)}
      ${METRICS.map((metric) => renderGlobalMetricCell(row.metrics.get(metric.key), metric)).join("")}
    </tr>
  `).join("");

  container.innerHTML = `
    <table class="global-table">
      <thead>
        <tr>
          ${renderSortableHeader("org", "Concesion")}
          ${renderSortableHeader("integrator", "Integrador")}
          ${renderSortableHeader("total", "Total")}
          ${headers}
        </tr>
      </thead>
      <tbody>${body}</tbody>
    </table>
  `;

  setupGlobalConcesionesSorting(container);
}

function renderGlobalConcesionesIntegratorFilters(data) {
  const container = document.getElementById("globalIntegratorFilters");
  if (!container) {
    return;
  }
  globalIntegratorModalData = data;
  if (!data.length) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
    <button class="integrator-filter-title" type="button" data-integrator-modal-open>Integradores</button>
    <div class="integrator-filters">
      ${INTEGRATOR_FILTERS.map((filter) => `
        <label class="integrator-filter ${getIntegratorClass(filter)} ${globalConcesionesIntegratorFilters.has(filter) ? "active" : ""}">
          <input type="checkbox" value="${escapeHtml(filter)}" ${globalConcesionesIntegratorFilters.has(filter) ? "checked" : ""}>
          <span>${escapeHtml(formatIntegratorLabel(filter))}</span>
          <span class="integrator-filter-count">${countRowsByIntegrator(data, filter)}</span>
        </label>
      `).join("")}
    </div>
  `;

  setupGlobalConcesionesIntegratorFilters(container);
  setupIntegratorModalOpen(container);
}

function setupIntegratorModalOpen(container) {
  const button = container.querySelector("[data-integrator-modal-open]");
  if (!button) {
    return;
  }
  button.addEventListener("click", () => openIntegratorModal(globalIntegratorModalData));
}

function openIntegratorModal(data) {
  closeIntegratorModal();
  const modal = document.createElement("div");
  modal.className = "integrator-modal-backdrop";
  modal.dataset.integratorModal = "true";
  modal.innerHTML = `
    <section class="integrator-modal" role="dialog" aria-modal="true" aria-labelledby="integratorModalTitle">
      <div class="integrator-modal-header">
        <h2 id="integratorModalTitle">Concesiones por integrador</h2>
        <button class="modal-close-button" type="button" data-integrator-modal-close aria-label="Cerrar">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18"></path>
          </svg>
        </button>
      </div>
      <div class="integrator-modal-body">
        ${renderIntegratorModalGroups(data)}
      </div>
    </section>
  `;

  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest("[data-integrator-modal-close]")) {
      closeIntegratorModal();
    }
  });
  document.addEventListener("keydown", handleIntegratorModalKeydown);
  document.body.appendChild(modal);
  modal.querySelector("[data-integrator-modal-close]")?.focus();
}

function closeIntegratorModal() {
  document.querySelectorAll("[data-integrator-modal='true']").forEach((modal) => modal.remove());
  document.removeEventListener("keydown", handleIntegratorModalKeydown);
}

function handleIntegratorModalKeydown(event) {
  if (event.key === "Escape") {
    closeIntegratorModal();
  }
}

function renderIntegratorModalGroups(data) {
  return INTEGRATOR_FILTERS.map((filter) => {
    const orgs = data
      .filter((row) => getIntegratorTokens(row.integrator).includes(filter))
      .map((row) => row.org)
      .filter(Boolean)
      .sort((left, right) => left.localeCompare(right));

    return `
      <section class="integrator-modal-group">
        <h3>${escapeHtml(formatIntegratorLabel(filter))} <span>${orgs.length}</span></h3>
        ${orgs.length ? `
          <div class="integrator-org-list">
            ${orgs.map((org) => `<span class="integrator-org">${escapeHtml(org)}</span>`).join("")}
          </div>
        ` : '<p class="integrator-modal-empty">Sin concesiones.</p>'}
      </section>
    `;
  }).join("");
}

function renderSortableHeader(key, label) {
  const active = globalConcesionesSort.key === key;
  const direction = active ? globalConcesionesSort.direction : "";
  const indicator = active ? (direction === "asc" ? "▲" : "▼") : "";
  const ariaSort = active ? (direction === "asc" ? "ascending" : "descending") : "none";

  return `
    <th scope="col" aria-sort="${ariaSort}">
      <button class="sort-button" type="button" data-sort-key="${escapeHtml(key)}">
        <span>${escapeHtml(label)}</span>
        <span class="sort-indicator" aria-hidden="true">${indicator}</span>
      </button>
    </th>
  `;
}

function setupGlobalConcesionesSorting(container) {
  container.querySelectorAll("[data-sort-key]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.sortKey;
      if (globalConcesionesSort.key === key) {
        globalConcesionesSort.direction = globalConcesionesSort.direction === "asc" ? "desc" : "asc";
      } else {
        globalConcesionesSort = { key, direction: "asc" };
      }

      renderGlobalConcesionesTable();
    });
  });
}

function setupGlobalConcesionesIntegratorFilters(container) {
  container.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      checkbox.closest(".integrator-filter")?.classList.toggle("active", checkbox.checked);
      const selected = new Set();
      container.querySelectorAll("input[type='checkbox']:checked").forEach((checkedCheckbox) => {
        selected.add(checkedCheckbox.value);
      });
      globalConcesionesIntegratorFilters = selected;
      if (document.body && document.body.dataset.page === "global-actual") {
        renderDashboardCardsForCurrentFilters();
      } else {
        renderGlobalConcesionesTable();
      }
    });
  });
}

function renderGlobalTotalCell(row) {
  const state = getState(row.totalPercent);
  const valueText = Number.isFinite(row.totalPercent) ? `${row.totalPercent.toFixed(1)}%` : "N/D";

  return `
    <td>
      <span class="percent-cell total-cell ${state}">
        <span class="percent-value">${valueText}</span>
        <span class="percent-subtext">${escapeHtml(formatDiscrepancias(row.totalMismatches))}</span>
      </span>
    </td>
  `;
}

function renderGlobalMetricCell(row, metric) {
  const value = getMetricPercent(row, metric && metric.key);
  const mismatches = toNumber(row && row.MismatchCount);
  const valueText = Number.isFinite(value) ? `${value.toFixed(1)}%` : "N/D";
  const metricText = formatMetricDetailText(row, metric && metric.key);
  const mismatchText = metricText || (Number.isFinite(mismatches) ? formatDiscrepancias(mismatches) : "Sin dato");
  const grayStyle = Number.isFinite(value) ? ` style="${getGrayGradientStyle(value)}"` : "";

  return `
    <td>
      <span class="percent-cell metric-cell"${grayStyle}>
        <span class="percent-value">${valueText}</span>
        <span class="percent-subtext">${escapeHtml(mismatchText)}</span>
      </span>
    </td>
  `;
}

function getGrayGradientStyle(value) {
  const percent = Math.max(0, Math.min(100, value));
  const t = percent / 100;
  const start = [243, 244, 246];
  const end = [75, 85, 99];
  const rgb = start.map((channel, index) => Math.round(channel + (end[index] - channel) * t));
  const color = percent >= 68 ? "#ffffff" : "#111827";
  return `background: rgb(${rgb.join(",")}); color: ${color};`;
}

function renderEmptyGlobalConcesiones() {
  const container = document.getElementById("globalConcesionesTable");
  const summary = document.getElementById("globalConcesionesSummary");

  if (summary) {
    summary.textContent = "Pendiente de datos";
  }
  if (container) {
    container.innerHTML = '<div class="empty-chart">Sin datos para pintar la tabla.</div>';
  }
}

function renderEmptyEvolution() {
  const chart = document.getElementById("evolutionChart");
  const legend = document.getElementById("evolutionLegend");
  const summary = document.getElementById("evolutionSummary");

  if (summary) {
    summary.textContent = "Pendiente de datos";
  }
  if (chart) {
    chart.innerHTML = '<div class="empty-chart">Sin datos para pintar la evolucion.</div>';
  }
  if (legend) {
    legend.innerHTML = "";
  }
}

function renderMetricBarsFromCsv(csvText, metric) {
  const rows = parseCsv(csvText);
  const orgRows = rows.filter((row) => normalize(row.Scope) === "ORG" && row.Metric === metric.key);

  if (!orgRows.length) {
    showStatus(`No hay datos de ${metric.label} por concesion en el CSV.`);
    renderEmptyMetricBars(metric);
    return;
  }

  const latestExecution = getLatestExecution(orgRows);
  const latestRows = orgRows.filter((row) => row.ExecutionDate === latestExecution);
  const data = latestRows
    .map((row) => ({
      org: row.OrganizationAppId,
      integrator: getRowIntegrator(row),
      percent: getMetricPercent(row, metric.key),
      mismatches: toNumber(row.MismatchCount),
      ratioText: formatMetricDetailText(row, metric.key),
      ratioNumerator: getRatioNumerator(row, metric.key),
      ratioDenominator: toNumber(row.TotalCount),
    }))
    .filter((item) => item.org && Number.isFinite(item.percent))
    .sort(compareBarRowsByAscendingPercent);

  if (!data.length) {
    renderEmptyMetricBars(metric);
    return;
  }

  hideStatus();
  renderMetricBarsSummary(metric, latestExecution, data);
  renderMetricBars(metric, data);
}

function compareBarRowsByAscendingPercent(left, right) {
  const leftMismatches = Number.isFinite(left.mismatches) ? left.mismatches : 0;
  const rightMismatches = Number.isFinite(right.mismatches) ? right.mismatches : 0;

  return left.percent - right.percent
    || leftMismatches - rightMismatches
    || left.org.localeCompare(right.org);
}

function renderMetricBarsSummary(metric, executionDate, data) {
  const summary = document.getElementById(metric.summaryId);
  if (summary) {
    const affected = data.filter((item) => item.percent < 100).length;
    const mismatches = data.reduce((total, item) => total + (Number.isFinite(item.mismatches) ? item.mismatches : 0), 0);
    const detailText = formatMetricAggregateDetail(metric.key, data) || formatDiscrepancias(mismatches);
    summary.textContent = `Ultima ejecucion: ${formatExecutionDate(executionDate)} | ${data.length} concesiones | ${affected} concesiones con discrepancias (no estan al 100%) | ${detailText}`;
  }
}

function renderMetricBars(metric, data) {
  const chart = document.getElementById(metric.chartId);
  if (!chart) {
    return;
  }

  chart.innerHTML = `
    <div class="bar-chart" role="img" aria-label="${escapeHtml(metric.label)} por concesion">
      <div class="bar-axis" aria-hidden="true">
        <span>0%</span>
        <span>25%</span>
        <span>50%</span>
        <span>75%</span>
        <span>100%</span>
      </div>
      ${data.map((item) => renderBarRow(item)).join("")}
    </div>
  `;
}

function renderBarRow(item) {
  const percent = Math.max(0, Math.min(100, item.percent));
  const mismatches = Number.isFinite(item.mismatches) ? item.mismatches : 0;
  const countText = item.ratioText || formatDiscrepancias(mismatches);
  const detailText = item.integrator ? `${formatIntegratorDisplay(item.integrator)} | ${countText}` : countText;

  return `
    <div class="bar-row">
      <div class="bar-label" title="${escapeHtml(item.org)}">
        <span>${escapeHtml(item.org)}</span>
        <span class="bar-label-count">${escapeHtml(detailText)}</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width:${percent.toFixed(1)}%; background:${getBlueGradientColor(percent)}"></div>
      </div>
      <div class="bar-value">${percent.toFixed(1)}%</div>
    </div>
  `;
}

function renderEmptyMetricBars(metric) {
  const chart = document.getElementById(metric.chartId);
  const summary = document.getElementById(metric.summaryId);

  if (summary) {
    summary.textContent = "Pendiente de datos";
  }
  if (chart) {
    chart.innerHTML = '<div class="empty-chart">Sin datos para pintar el grafico.</div>';
  }
}

function ensureBackButton() {
  const actions = getTopbarActions();
  if (!actions || actions.querySelector(".back-button")) {
    return;
  }

  const link = document.createElement("a");
  link.className = "back-button";
  link.href = "global-actual.html";
  link.textContent = "Volver a global";
  actions.prepend(link);
}

function getBlueGradientColor(percent) {
  const start = [191, 219, 254];
  const end = [29, 78, 216];
  const t = Math.max(0, Math.min(1, percent / 100));
  const rgb = start.map((value, index) => Math.round(value + (end[index] - value) * t));
  return `rgb(${rgb.join(",")})`;
}

function formatDiscrepancias(value) {
  const count = Number.isFinite(value) ? value : 0;
  return `${count} ${count === 1 ? "discrepancia" : "discrepancias"}`;
}

function getMetricPercent(row, metricKey) {
  if (isRatioMetric(metricKey)) {
    const numerator = getRatioNumerator(row, metricKey);
    const denominator = toNumber(row && row.TotalCount);
    if (!Number.isFinite(denominator) || denominator <= 0) {
      return 0;
    }
    if (!Number.isFinite(numerator)) {
      return NaN;
    }

    return Math.max(0, Math.min(100, (getBoundedRatioNumerator(numerator, denominator) / denominator) * 100));
  }

  const rawValue = toNumber(row && row.SyncPercent);
  if (Number.isFinite(rawValue)) {
    return rawValue;
  }

  return NaN;
}

function isRatioMetric(metricKey) {
  return Object.prototype.hasOwnProperty.call(RATIO_METRIC_FIELDS, metricKey);
}

function getRatioNumerator(row, metricKey) {
  const field = RATIO_METRIC_FIELDS[metricKey];
  return field ? toNumber(row && row[field]) : NaN;
}

function getBoundedRatioNumerator(numerator, denominator) {
  if (!Number.isFinite(numerator)) {
    return NaN;
  }
  if (!Number.isFinite(denominator) || denominator < 0) {
    return numerator;
  }
  return Math.max(0, Math.min(numerator, denominator));
}

function formatMetricDetailText(row, metricKey) {
  if (!isRatioMetric(metricKey)) {
    return "";
  }

  const numerator = getRatioNumerator(row, metricKey);
  const denominator = toNumber(row && row.TotalCount);
  if (!Number.isFinite(denominator)) {
    return "Sin dato";
  }
  if (denominator <= 0) {
    return `${formatCount(Number.isFinite(numerator) ? Math.max(0, numerator) : 0)}/0`;
  }
  if (!Number.isFinite(numerator)) {
    return "Sin dato";
  }

  return `${formatCount(getBoundedRatioNumerator(numerator, denominator))}/${formatCount(denominator)}`;
}

function formatMetricAggregateDetail(metricKey, data) {
  if (!isRatioMetric(metricKey)) {
    return "";
  }

  const totals = data.reduce((acc, item) => {
    if (Number.isFinite(item.ratioNumerator) && Number.isFinite(item.ratioDenominator) && item.ratioDenominator >= 0) {
      acc.numerator += getBoundedRatioNumerator(item.ratioNumerator, item.ratioDenominator);
      acc.denominator += item.ratioDenominator;
    }
    return acc;
  }, { numerator: 0, denominator: 0 });

  if (totals.denominator <= 0) {
    return "";
  }

  return `${formatCount(totals.numerator)}/${formatCount(totals.denominator)}`;
}

function getIntegratorFromMetricRows(metricRows) {
  let fallback = UNKNOWN_INTEGRATOR;
  for (const row of metricRows.values()) {
    const integrator = getRowIntegrator(row);
    if (integrator && integrator !== UNKNOWN_INTEGRATOR) {
      return integrator;
    }
    fallback = integrator || fallback;
  }
  return fallback;
}

function getRowIntegrator(row) {
  const value = String(row && row.Integrator || "").trim();
  return value || UNKNOWN_INTEGRATOR;
}

function getIntegratorTokens(value) {
  const tokens = String(value || "")
    .split(/[/,|+]+/)
    .map((token) => token.trim())
    .filter(Boolean);

  const knownTokens = tokens.filter((token) => INTEGRATOR_FILTERS.includes(token));
  return knownTokens.length ? knownTokens : [UNKNOWN_INTEGRATOR];
}

function rowMatchesIntegratorFilters(row, selectedFilters) {
  if (!selectedFilters || !selectedFilters.size) {
    return false;
  }
  return getIntegratorTokens(row.integrator).some((token) => selectedFilters.has(token));
}

function countRowsByIntegrator(data, filter) {
  return data.filter((row) => getIntegratorTokens(row.integrator).includes(filter)).length;
}

function renderIntegratorBadges(value) {
  return getIntegratorTokens(value).map((token) => (
    `<span class="integrator-badge ${getIntegratorClass(token)}">${escapeHtml(formatIntegratorLabel(token))}</span>`
  )).join("");
}

function formatIntegratorDisplay(value) {
  return getIntegratorTokens(value).map(formatIntegratorLabel).join("/");
}

function formatIntegratorLabel(value) {
  return INTEGRATOR_LABELS[value] || value;
}

function getIntegratorClass(value) {
  const normalized = normalize(value).replaceAll("/", "-");
  if (normalized === "GMV") {
    return "gmv";
  }
  if (normalized === "PROCONSI") {
    return "proconsi";
  }
  return "unknown";
}

function formatCount(value) {
  return Number.isInteger(value) ? String(value) : String(Number(value).toFixed(1));
}

function parseCsv(text) {
  const rawRows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        cell += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        index += 1;
      }
      row.push(cell);
      rawRows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  if (cell || row.length) {
    row.push(cell);
    rawRows.push(row);
  }

  const rows = rawRows.filter((items) => items.some((item) => item.trim() !== ""));
  if (!rows.length) {
    return [];
  }

  const headers = rows[0].map((header) => header.trim());
  return rows.slice(1).map((items) => {
    const record = {};
    headers.forEach((header, index) => {
      record[header] = (items[index] || "").trim();
    });
    return record;
  });
}

function getLatestExecution(rows) {
  return rows
    .map((row) => row.ExecutionDate)
    .filter(Boolean)
    .sort((left, right) => compareExecutionDates(right, left))[0];
}

function compareExecutionDates(left, right) {
  const leftDate = Date.parse(left);
  const rightDate = Date.parse(right);

  if (!Number.isNaN(leftDate) && !Number.isNaN(rightDate)) {
    return leftDate - rightDate;
  }

  return String(left).localeCompare(String(right));
}

function getExecutionDay(value) {
  const raw = String(value || "").trim();
  const match = raw.match(/^\d{4}-\d{2}-\d{2}/);
  if (match) {
    return match[0];
  }

  const parsed = Date.parse(raw);
  if (Number.isNaN(parsed)) {
    return "";
  }

  const date = new Date(parsed);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function renderLastRun(value) {
  const lastRun = document.getElementById("lastRun");
  if (lastRun) {
    lastRun.textContent = `Ultima ejecucion: ${formatExecutionDate(value)}`;
  }
}

function getTickIndexes(length, maxTicks) {
  if (length <= 0) {
    return [];
  }
  if (length <= maxTicks) {
    return Array.from({ length }, (_, index) => index);
  }

  const indexes = new Set();
  const step = (length - 1) / (maxTicks - 1);
  for (let index = 0; index < maxTicks; index += 1) {
    indexes.add(Math.round(index * step));
  }
  return Array.from(indexes).sort((left, right) => left - right);
}

function getState(value) {
  const thresholds = getThresholds();
  if (Number.isFinite(value) && value > thresholds.green) {
    return "good";
  }
  if (Number.isFinite(value) && value > thresholds.yellow) {
    return "warning";
  }
  return "bad";
}

function getThresholds() {
  const configured = window.MISMATCHES_CONFIG && window.MISMATCHES_CONFIG.thresholds
    ? window.MISMATCHES_CONFIG.thresholds
    : {};
  const green = toNumber(configured.green);
  const yellow = toNumber(configured.yellow);

  return {
    green: Number.isFinite(green) ? green : DEFAULT_THRESHOLDS.green,
    yellow: Number.isFinite(yellow) ? yellow : DEFAULT_THRESHOLDS.yellow,
  };
}

function showStatus(message) {
  const panel = document.getElementById("statusPanel");
  const text = document.getElementById("statusText");
  if (!panel || !text) {
    return;
  }
  text.textContent = message;
  panel.hidden = false;
}

function hideStatus() {
  const panel = document.getElementById("statusPanel");
  if (panel) {
    panel.hidden = true;
  }
}

function toNumber(value) {
  if (value === undefined || value === null || value === "") {
    return NaN;
  }
  return Number(String(value).replace(",", "."));
}

function normalize(value) {
  return String(value || "").trim().toUpperCase();
}

function formatExecutionDate(value) {
  const parsed = Date.parse(value);
  if (Number.isNaN(parsed)) {
    return value;
  }
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "short",
    timeStyle: "medium"
  }).format(new Date(parsed));
}

function formatDay(value) {
  const parsed = Date.parse(`${value}T00:00:00`);
  if (Number.isNaN(parsed)) {
    return value;
  }
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  }).format(new Date(parsed));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
