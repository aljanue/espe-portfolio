/**
 * HistoryService
 * Centralized service to handle browser History API interactions.
 * Ensures consistent state management across the application without duplicating logic.
 */
export class HistoryService {
  /**
   * Pushes a new state to the browser history, merging with the current state.
   */
  public static pushState(newState: Record<string, any>): void {
    window.history.pushState({ ...window.history.state, ...newState }, '', '');
  }

  /**
   * Replaces the current browser history state, merging with existing state.
   */
  public static replaceState(newState: Record<string, any>): void {
    window.history.replaceState({ ...window.history.state, ...newState }, '', '');
  }

  /**
   * Navigates back in history only if the specified key exists in the current state.
   * Useful to safely close overlays (like project details) without exiting the app.
   */
  public static goBackIfStateExists(key: string): boolean {
    if (window.history.state && window.history.state[key]) {
      window.history.back();
      return true;
    }
    return false;
  }
}
