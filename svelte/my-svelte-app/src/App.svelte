<script>
  import TransitionTest from "./lib/TransitionTest.svelte";
  let newPost = '';
  let posts = [];
  function addPost(){
    posts = [...posts,newPost];
  }
</script>

<main>
  <h1>Soliloquy</h1>
  <h2>Social media without the sharing</h2>
  <label>Talk to yourself: <input bind:value={newPost} type="text"/></label>
  <button on:click={addPost}>Post It!</button>
  <div>
    {#each posts as post}
      <div>{post}</div>
    {/each}
  </div>
  <div>
  <TransitionTest />
  </div>
</main>

<style>
  
</style>
