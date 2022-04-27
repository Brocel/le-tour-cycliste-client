export function saveSessionStorage(key, value) {
	sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSessionStorage(key) {
	return JSON.parse(sessionStorage.getItem(key));
}
