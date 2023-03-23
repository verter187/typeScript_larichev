interface Observer {
  update(subject: Subject): void;
}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class Lead {
  constructor(public name: string, public phone: string) {}
}

class NewLead implements Subject {
  private observers: Observer[] = [];
  public state: Lead;

  attach(observer: Observer): void {
    if (this.observers.includes(observer)) {
      return;
    } else {
      this.observers.push(observer);
    }
  }
  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex == -1) {
      return;
    } else {
      this.observers.splice(observerIndex, 1);
    }
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}

class NoteficationService implements Observer {
  update(subject: Subject): void {
    console.log(`NotificationService получил уведомление`);
    console.log(subject);
  }
}

class LeadService implements Observer {
  update(subject: Subject): void {
    console.log(`LeadService получил уведомление`);
    console.log(subject);
  }
}

const subject = new NewLead();
subject.state = new Lead("Anton", "+798798787");

const s1 = new NoteficationService();
const s2 = new LeadService();

subject.attach(s1);
subject.attach(s2);
subject.notify();
subject.detach(s1);
subject.notify();
