'use babel';

import สล็อตแตกหนัก789KMView from './สล็อตแตกหนัก789-k-m-view';
import { CompositeDisposable } from 'atom';

export default {

  สล็อตแตกหนัก789KMView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.สล็อตแตกหนัก789KMView = new สล็อตแตกหนัก789KMView(state.สล็อตแตกหนัก789KMViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.สล็อตแตกหนัก789KMView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'สล็อตแตกหนัก789-k-m:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.สล็อตแตกหนัก789KMView.destroy();
  },

  serialize() {
    return {
      สล็อตแตกหนัก789KMViewState: this.สล็อตแตกหนัก789KMView.serialize()
    };
  },

  toggle() {
    console.log('สล็อตแตกหนัก789KM was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
