class EventEmitter<T> {
  private eventHandlers: { [key: string]: ((data: T) => void)[] }

  constructor() {
    this.eventHandlers = {}
  }

  on(event: string, handler: (data: T) => void): void {
    if (!this.eventHandlers[event]) {
      this.eventHandlers[event] = []
    }

    this.eventHandlers[event].push(handler)
  }

  off(event: string, handler: (data: T) => void): void {
    const handlers = this.eventHandlers[event]
    if (handlers) {
      this.eventHandlers[event] = handlers.filter((h) => h !== handler)
    }
  }

  emit(event: string, data: T): void {
    const handlers = this.eventHandlers[event]
    if (handlers) {
      handlers.forEach((handler) => handler(data))
    }
  }
}

export default EventEmitter
