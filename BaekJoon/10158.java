//10158번 개미 문제,
// const [wh,pq,t] = require("fs").readFileSync("testInput.txt").toString().split("\n").map(v => v.split(" ").map(Number));

// function antPosition(w, h, p, q, t) {
//     // 개미의 이동 거리를 나타내는 변수 dx, dy
//     let dx = 1, dy = 1;
//     // 경계면에 부딪히면 반사되므로 개미의 이동 방향을 나타내는 변수 dir
//     let dir = 1;
    
//     // 개미가 이동한 시간 t만큼 반복
//     for(let i = 0; i < t; i++) {
//       // 개미의 현재 위치에서 dx, dy만큼 더한 값이 경계면을 벗어나면 반사되어 이동 방향을 바꿈
//       if(p + dx > w || p + dx < 0) {
//         dx = -dx;
//         dir = -dir;
//       }
//       if(q + dy > h || q + dy < 0) {
//         dy = -dy;
//         dir = -dir;
//       }
      
//       // 개미의 위치를 dx, dy만큼 이동시킴
//       p += dx;
//       q += dy;
//     }
    
//     // 개미의 최종 위치를 반환
//     return [p, q];
//   };
  
//   // 예시: (6,4) 크기의 격자에서 (4,1)에서 출발한 개미가 8시간 후의 위치
//   console.log(antPosition(wh[0], wh[1], pq[0], pq[1], t)); // [0, 1]
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String temp = br.readLine();
		int w = Integer.parseInt(temp.split(" ")[0]);
		int h = Integer.parseInt(temp.split(" ")[1]);
		temp = br.readLine();
		int p = Integer.parseInt(temp.split(" ")[0]);
		int q = Integer.parseInt(temp.split(" ")[1]);
		int t = Integer.parseInt(br.readLine());

		if(((int)(p + t) / w) % 2 == 0) {
			p = (p + t) % w;
		}else {
			p = w - (p + t) % w; 
		}
		
		if(((int)(q + t) / h) % 2 == 0) {
			q = (q + t) % h;
		}else {
			q = h - (q + t) % h; 
		}
		System.out.println(p + " " + q);
	}
}