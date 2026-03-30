import kaplay from "kaplay";
import kaplayFit from "../../src";

const k = kaplay({
  plugins: [kaplayFit()],
});

k.add([k.rect(200, 200)]);
