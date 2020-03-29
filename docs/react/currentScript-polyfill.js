// document.currentScript polyfill by Adam Miller

// MIT license

(function(document) {
  var currentScript = 'currentScript',
    scripts = document.getElementsByTagName('script') // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function() {
        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error() } catch (err) {
          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, script, res = ((/.*at [^(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1]

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for (i in scripts) {
            script = scripts[i]
            if (typeof script.readyState !== 'undefined' && (script.src === res || script.readyState === 'interactive')) {
              return script
            }
          }

          // If no match, return null
          return null
        }
      }
    })
  }
})(document)
