import{_ as n,o as s,c as a,d as e}from"./app-cbd50432.js";const p={},t=e(`<h3 id="浅拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝" aria-hidden="true">#</a> 浅拷贝</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 基本数据类型</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">str</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>          <span class="token comment">// string</span>
  <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>          <span class="token comment">// number</span>
  <span class="token literal-property property">bool</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>       <span class="token comment">// boolean</span>
  <span class="token literal-property property">nul</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>        <span class="token comment">// null</span>
  <span class="token literal-property property">unf</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>   <span class="token comment">// undefined</span>
  <span class="token literal-property property">sym</span><span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>    <span class="token comment">// symbol</span>
  <span class="token literal-property property">bign</span><span class="token operator">:</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">1n</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// bigint</span>
<span class="token punctuation">}</span>


<span class="token keyword">let</span> shallowCloneObj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>obj <span class="token punctuation">}</span>
<span class="token comment">// let shallowCloneObj = Object.assign({}, obj)</span>
<span class="token comment">// let shallowCloneObj = JSON.parse(JSON.stringify(obj)) // bigint 会报错</span>


shallowCloneObj<span class="token punctuation">.</span>str <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
shallowCloneObj<span class="token punctuation">.</span>num <span class="token operator">=</span> <span class="token number">30</span>
shallowCloneObj<span class="token punctuation">.</span>bool <span class="token operator">=</span> <span class="token boolean">false</span>
shallowCloneObj<span class="token punctuation">.</span>bign <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">2n</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>shallowCloneObj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> 深拷贝</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">str</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>          <span class="token comment">// string</span>
  <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>          <span class="token comment">// number</span>
  <span class="token literal-property property">bool</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>       <span class="token comment">// boolean</span>
  <span class="token literal-property property">nul</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>        <span class="token comment">// null</span>
  <span class="token literal-property property">unf</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>   <span class="token comment">// undefined</span>
  <span class="token literal-property property">sym</span><span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>    <span class="token comment">// symbol</span>
  <span class="token literal-property property">bign</span><span class="token operator">:</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">1n</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// bigint</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!=</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> target <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> cloneObj
  <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cloneObj <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    cloneObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// for...in MDN 以任意顺序迭代一个对象的除Symbol意外以外的可枚举属性，包括继承的可枚举属性</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cloneObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> cloneObj
<span class="token punctuation">}</span>


<span class="token keyword">let</span> deepCloneObj <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

deepCloneObj<span class="token punctuation">.</span>str <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
deepCloneObj<span class="token punctuation">.</span>num <span class="token operator">=</span> <span class="token number">30</span>
deepCloneObj<span class="token punctuation">.</span>bool <span class="token operator">=</span> <span class="token boolean">false</span>
deepCloneObj<span class="token punctuation">.</span>bign <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">2n</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>deepCloneObj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[t];function l(c,i){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","23102002.html.vue"]]);export{u as default};
