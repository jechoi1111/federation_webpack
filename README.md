# Turborepo

## Apps and Packages

- `remote`:  Remote App
- `host`: Host App
- `remote_host`: Remote And Host App


## turbo.json
### build options

- `dependsOn: ["^build"]`: 현재 패키지의 `build` 작업이 실행되기 전에 상위 패키지(의존하는 패키지)의 `build` 작업이 먼저 실행되도록 설정
  - `^build`: 모노레포 구조에서 직접적으로 읜존하는 패키지들의 `build` 작업을 먼저 실행하도록 지정
  - Ex) A 패키지가 B 패키지를 의존하고 있다면, `turbo build` 실행 시 B의 `build`가 먼저 실행되고, 그 다음 A의 `build`가 실행됨
- `inputs: ["$TURBO_DEFAULT$", ".env*"]` : 입력 파일이 변경되었을 때만 빌드를 다시 실행
  - 빌드에 영향을 미치는 파일을 정의
  - `$TURBO_DEFAULT$`: Turbo가 기본적으로 감시하는 파일
  - `.env*`: `.env` 관련 파일이 변경되면 빌드 다시 실행
- `outputs: ["dist/**"]`: 빌드 결과물이 저장될 디렉토리를 지정하는 옵션

### dev options

- `cache: false` : `false`로 설정한 경우 Turbo가 dev 환경에서 빌드 결과를 캐싱하지 않음
  - 코드 변경될 떄마다 Turbo는 이전 빌드 결과를 사용하지 않고 새로 실행
- `persistent: true`: `true`로 설정하면 Trubo가 캐시를 디스크에 영구적으로 저장
