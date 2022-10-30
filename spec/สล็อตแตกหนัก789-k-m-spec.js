'use babel';

import สล็อตแตกหนัก789KM from '../lib/สล็อตแตกหนัก789-k-m';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('สล็อตแตกหนัก789KM', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('สล็อตแตกหนัก789-k-m');
  });

  describe('when the สล็อตแตกหนัก789-k-m:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.สล็อตแตกหนัก789-k-m')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'สล็อตแตกหนัก789-k-m:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.สล็อตแตกหนัก789-k-m')).toExist();

        let สล็อตแตกหนัก789KMElement = workspaceElement.querySelector('.สล็อตแตกหนัก789-k-m');
        expect(สล็อตแตกหนัก789KMElement).toExist();

        let สล็อตแตกหนัก789KMPanel = atom.workspace.panelForItem(สล็อตแตกหนัก789KMElement);
        expect(สล็อตแตกหนัก789KMPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'สล็อตแตกหนัก789-k-m:toggle');
        expect(สล็อตแตกหนัก789KMPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.สล็อตแตกหนัก789-k-m')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'สล็อตแตกหนัก789-k-m:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let สล็อตแตกหนัก789KMElement = workspaceElement.querySelector('.สล็อตแตกหนัก789-k-m');
        expect(สล็อตแตกหนัก789KMElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'สล็อตแตกหนัก789-k-m:toggle');
        expect(สล็อตแตกหนัก789KMElement).not.toBeVisible();
      });
    });
  });
});
