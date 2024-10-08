#version 330 core

out vec4 FragColor;

in vec2 TexCoord;

uniform sampler2D texture1;


//for depth
float near = 0.1f;
float far = 100.0f;

float LinearizeDepth(float depth){
      float z = depth*2.0f - 1.0f;
      return (2.0f*near*far)/(far+near-z*(far-near));
}

void main(){
     //FragColor = texture(texture1,TexCoord);
     float depth = LinearizeDepth(gl_FragCoord.z)/far;
     FragColor = vec4(vec3(depth),1.0f);
}