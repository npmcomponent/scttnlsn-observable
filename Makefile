build: components index.js
	@component build --dev

components:
	@component install --dev

clean:
	rm -rf build components

.PHONY: clean